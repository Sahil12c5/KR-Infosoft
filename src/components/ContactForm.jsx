import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiSend, FiCheckCircle, FiAlertCircle, FiRefreshCw } from 'react-icons/fi';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import siteConfig from '../config/siteConfig';

export const ContactForm = () => {
  const [searchParams] = useSearchParams();

  // Map URL parameter to dropdown label if navigated with a service query
  const resolveRequirement = (param) => {
    if (!param) return '';
    const map = {
      'software-development': 'Develop Custom Software',
      'web-development': 'Develop Custom Software',
      'mobile-development': 'Build a Mobile App',
      'ai-solutions': 'AI / GenAI Solution',
      'mobile-app': 'Build a Mobile App',
      'custom-software': 'Develop Custom Software',
      'ai-genai': 'AI / GenAI Solution',
      'ecommerce-app': 'Build an E-Commerce Website/App',
      'crm-erp-automation': 'CRM / ERP / Business Automation',
      'api-backend': 'API / Backend Development',
      'ui-ux-design': 'UI/UX Design',
      'software-website-modification': 'Existing Software / Website Modification',
      'cloud-database': 'Cloud & Database Solutions',
      'software-testing-automation': 'Software Testing & Automation',
      'idea-consultation': 'I Have an Idea — Need Consultation',
      'other': 'Other'
    };
    return map[param] || param;
  };

  // Pre-fill fields if query parameters are present
  const rawService = searchParams.get('service') || searchParams.get('requirement') || '';
  const initialService = resolveRequirement(rawService);
  const initialInquiry = searchParams.get('inquiry') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: initialService,
    budget: '',
    message: initialInquiry ? `Hi, I am interested in building a solution similar to "${initialInquiry}".` : '',
    botcheck: '' // Honeypot spam trap
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  // Update form if URL params change
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Client-side validation
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 digits).';
    }

    if (!formData.service) {
      newErrors.service = 'Please select your requirements.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Trigger Analytics conversion events safely
  const triggerConversionEvents = () => {
    // Google Analytics 4 conversion event
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Contact',
        event_label: formData.service || 'General Inquiry',
        value: 1
      });
    }

    // Meta / Facebook Pixel Lead event
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: formData.service,
        currency: 'USD',
        value: 100
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check: If bot filled this hidden field, silently reject
    if (formData.botcheck) {
      console.warn('Bot detected via honeypot field.');
      setSubmitStatus('success');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const provider = siteConfig.formService.provider;

      if (provider === 'web3forms') {
        // Option B: Web3Forms API
        const accessKey = siteConfig.formService.web3forms.accessKey;

        // If placeholder/demo key, simulate success smoothly in dev mode
        if (!accessKey || accessKey.includes('YOUR_') || accessKey.includes('DEMO_')) {
          console.info('Simulating Web3Forms submission (mock mode with placeholder key).');
          await new Promise((resolve) => setTimeout(resolve, 900));
        } else {
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              access_key: accessKey,
              subject: `New IT Project Inquiry from ${formData.name}`,
              from_name: 'KR Infosoft Lead Engine',
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              company: formData.company || 'N/A',
              service: formData.service,
              budget: formData.budget || 'Unspecified',
              message: formData.message
            })
          });

          const result = await response.json();
          if (!result.success) {
            throw new Error(result.message || 'Submission failed. Please try again.');
          }
        }
      } else {
        // Option A: EmailJS (Default)
        const { serviceId, templateId, publicKey } = siteConfig.formService.emailjs;

        // If keys are demo/placeholders, gracefully simulate success in dev
        if (!publicKey || publicKey.includes('YOUR_') || publicKey.includes('DEMO_')) {
          console.info('Simulating EmailJS submission (mock mode with placeholder key).');
          await new Promise((resolve) => setTimeout(resolve, 900));
        } else {
          await emailjs.send(
            serviceId,
            templateId,
            {
              from_name: formData.name,
              reply_to: formData.email,
              phone_number: formData.phone,
              company_name: formData.company || 'N/A',
              service_name: formData.service,
              budget_range: formData.budget || 'Unspecified',
              message: formData.message
            },
            publicKey
          );
        }
      }

      // Success handling
      setSubmitStatus('success');
      triggerConversionEvents();

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback if canvas is not available
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitStatus('error');
      setErrorMessage(
        err.message || 'Something went wrong while sending your request. Please email or WhatsApp us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      botcheck: ''
    });
    setErrors({});
    setSubmitStatus(null);
  };

  // Render Thank You / Success State
  if (submitStatus === 'success') {
    return (
      <div
        className="card-glass p-4 p-md-5 rounded-4 text-center"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '2px solid rgba(16, 185, 129, 0.4)',
          boxShadow: 'var(--shadow-lg)'
        }}
      >
        <div
          className="d-inline-flex align-items-center justify-content-center text-white mb-4 rounded-circle shadow-sm"
          style={{
            width: '72px',
            height: '72px',
            backgroundColor: '#10B981'
          }}
        >
          <FiCheckCircle size={40} />
        </div>

        <h3 className="h3 fw-bold mb-2" style={{ color: 'var(--text)' }}>
          Inquiry Received Successfully!
        </h3>

        <p className="fs-6 mb-3" style={{ color: 'var(--text-secondary)' }}>
          Thank you, <strong style={{ color: 'var(--text)' }}>{formData.name}</strong>. Our senior solution architect will review your requirements and reach out via email (<span style={{ color: 'var(--primary)' }}>{formData.email}</span>) or WhatsApp within <strong>24 business hours</strong>.
        </p>

        <div
          className="p-3 rounded-3 mb-4 mx-auto text-start"
          style={{
            backgroundColor: 'var(--bg-soft)',
            border: '1px solid var(--border)',
            maxWidth: '480px'
          }}
        >
          <div className="small fw-bold text-uppercase mb-2 text-muted" style={{ fontSize: '0.72rem' }}>
            What Happens Next?
          </div>
          <ul className="list-unstyled d-flex flex-column gap-2 small mb-0" style={{ color: 'var(--text-secondary)' }}>
            <li className="d-flex align-items-center gap-2">
              <span className="badge rounded-pill bg-primary" style={{ width: '20px', height: '20px' }}>1</span>
              <span>Project scope & technical feasibility assessment</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <span className="badge rounded-pill bg-primary" style={{ width: '20px', height: '20px' }}>2</span>
              <span>Preliminary architecture plan & milestone roadmap</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <span className="badge rounded-pill bg-primary" style={{ width: '20px', height: '20px' }}>3</span>
              <span>Confidential 30-min discovery session & fixed quote</span>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
              `Hi KR Infosoft, I just submitted the contact form under the name "${formData.name}". Looking forward to connecting!`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success fw-bold px-4 py-2 rounded-3 shadow-sm d-inline-flex align-items-center gap-2"
          >
            <span>Message on WhatsApp Now</span>
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="btn btn-kr-outline px-4 py-2 rounded-3 d-inline-flex align-items-center gap-2"
          >
            <FiRefreshCw size={16} />
            <span>Send Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card-glass p-4 p-md-5 rounded-4 shadow-sm"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)'
      }}
    >
      <h3 className="h4 fw-bold mb-2" style={{ color: 'var(--text)' }}>
        Send us a message
      </h3>
      <p className="small mb-4 text-muted">
        Fill in the details below and we will get back to you promptly.
      </p>

      {/* Error Banner */}
      {submitStatus === 'error' && (
        <div className="alert alert-danger d-flex align-items-center gap-2 small mb-4 py-2" role="alert">
          <FiAlertCircle size={18} className="flex-shrink-0" />
          <div>{errorMessage}</div>
        </div>
      )}

      {/* Honeypot Spam Trap (Hidden from genuine human visitors) */}
      <div style={{ display: 'none', visibility: 'hidden' }}>
        <input
          type="text"
          name="botcheck"
          tabIndex="-1"
          autoComplete="off"
          value={formData.botcheck}
          onChange={handleChange}
        />
      </div>

      <div className="row g-3">
        {/* Full Name */}
        <div className="col-md-6">
          <label className="form-label small fw-bold" style={{ color: 'var(--text)' }}>
            Full Name <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            style={{
              backgroundColor: 'var(--bg-soft)',
              borderColor: errors.name ? '#EF4444' : 'var(--border)',
              color: 'var(--text)',
              borderRadius: '10px',
              padding: '0.75rem 1rem'
            }}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Phone Number */}
        <div className="col-md-6">
          <label className="form-label small fw-bold" style={{ color: 'var(--text)' }}>
            Phone Number <span className="text-danger">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 XXXXXXXXXX"
            value={formData.phone}
            onChange={handleChange}
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            style={{
              backgroundColor: 'var(--bg-soft)',
              borderColor: errors.phone ? '#EF4444' : 'var(--border)',
              color: 'var(--text)',
              borderRadius: '10px',
              padding: '0.75rem 1rem'
            }}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>

        {/* Email Address */}
        <div className="col-md-6">
          <label className="form-label small fw-bold" style={{ color: 'var(--text)' }}>
            Email Address <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            style={{
              backgroundColor: 'var(--bg-soft)',
              borderColor: errors.email ? '#EF4444' : 'var(--border)',
              color: 'var(--text)',
              borderRadius: '10px',
              padding: '0.75rem 1rem'
            }}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Select Your Requirements */}
        <div className="col-md-6">
          <label className="form-label small fw-bold" style={{ color: 'var(--text)' }}>
            Select Your Requirements <span className="text-danger">*</span>
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`form-select ${errors.service ? 'is-invalid' : ''}`}
            style={{
              backgroundColor: 'var(--bg-soft)',
              borderColor: errors.service ? '#EF4444' : 'var(--border)',
              color: 'var(--text)',
              borderRadius: '10px',
              padding: '0.75rem 1rem'
            }}
          >
            <option value="">Select your requirements...</option>
            {(siteConfig.requirementOptions || siteConfig.programOptions || siteConfig.serviceOptions).map((opt) => (
              <option key={opt.value} value={opt.label}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.service && <div className="invalid-feedback">{errors.service}</div>}
        </div>

        {/* Message */}
        <div className="col-12">
          <label className="form-label small fw-bold" style={{ color: 'var(--text)' }}>
            Message <span className="text-danger">*</span>
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            style={{
              backgroundColor: 'var(--bg-soft)',
              borderColor: errors.message ? '#EF4444' : 'var(--border)',
              color: 'var(--text)',
              borderRadius: '10px',
              padding: '0.75rem 1rem'
            }}
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        {/* Submit Button */}
        <div className="col-12 mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-kr-gradient w-100 py-3 fw-bold fs-6 text-white"
            style={{ borderRadius: '12px' }}
          >
            {isSubmitting ? (
              <span className="d-flex align-items-center justify-content-center gap-2">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                <span>Submitting...</span>
              </span>
            ) : (
              <span className="d-flex align-items-center justify-content-center gap-2">
                <FiSend size={18} />
                <span>Submit</span>
              </span>
            )}
          </button>

          <div className="text-center mt-3">
            <span className="small text-muted" style={{ fontSize: '0.75rem' }}>
              🔒 100% Privacy. We never share your details with third parties.
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
