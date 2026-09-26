import React, { useEffect } from 'react';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiShield,
  FiSend,
  FiMessageSquare
} from 'react-icons/fi';
import { FaWhatsapp, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import siteConfig from '../config/siteConfig';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    'Hello KR Infosoft! I would like to schedule a call regarding my software development project.'
  )}`;

  return (
    <main className="py-5" style={{ backgroundColor: 'var(--bg-soft)', minHeight: '85vh' }}>
      <div className="container-xl">
        {/* Page Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '750px' }}>
          <h1 className="display-5 fw-bold mb-3" style={{ letterSpacing: '-0.025em', color: 'var(--text)' }}>
            Let's Engineer Your <span className="text-gradient">Next Digital Breakthrough</span>
          </h1>

          <p className="lead fs-6 text-muted mb-0">
            Tell us about your upcoming software, web, mobile, or AI initiative. Speak directly with a solution architect to receive a tailored estimate and roadmap within 24 hours.
          </p>
        </div>

        <div className="row g-4 g-lg-5 align-items-start">
          {/* Left Column: Form */}
          <div className="col-lg-7">
            <ContactForm />
          </div>

          {/* Right Column: Direct Contact Info, Working Hours, & Google Map */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-4">
              {/* Quick WhatsApp Direct Box */}
              <div
                className="p-4 rounded-4 text-white shadow-sm position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)'
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <FaWhatsapp size={26} />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-0 text-white" style={{ fontSize: '1.15rem' }}>
                      Prefer Instant Messaging?
                    </h4>
                    <span className="small" style={{ opacity: 0.9 }}>
                      Average response time: &lt; 15 mins
                    </span>
                  </div>
                </div>
                <p className="small mb-3" style={{ opacity: 0.95 }}>
                  Chat directly with our solutions team to discuss initial scope, budgets, or quick architectural questions.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light fw-bold text-success w-100 py-2 d-flex align-items-center justify-content-center gap-2 rounded-3 shadow-sm"
                >
                  <FaWhatsapp size={18} />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>

              {/* Company Details Card */}
              <div
                className="card-glass p-4 rounded-4 shadow-sm"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)'
                }}
              >
                <h4 className="fw-bold mb-3" style={{ fontSize: '1.1rem', color: 'var(--text)' }}>
                  Headquarters & Contact
                </h4>

                <div className="d-flex flex-column gap-3">
                  {/* Address */}
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-2 rounded-3 text-primary mt-1 flex-shrink-0"
                      style={{ backgroundColor: 'var(--bg-soft)', border: '1px solid var(--border)' }}
                    >
                      <FiMapPin size={18} />
                    </div>
                    <div>
                      <div className="fw-semibold text-muted text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                        Office Address
                      </div>
                      <div className="fw-medium mt-1" style={{ color: 'var(--text)', fontSize: '0.925rem', lineHeight: '1.5' }}>
                        {siteConfig.contact.address.fullAddress}
                      </div>
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-2 rounded-3 text-primary mt-1 flex-shrink-0"
                      style={{ backgroundColor: 'var(--bg-soft)', border: '1px solid var(--border)' }}
                    >
                      <FiPhone size={18} />
                    </div>
                    <div>
                      <div className="fw-semibold text-muted text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                        Contact Number
                      </div>
                      <div className="mt-1 d-flex flex-column gap-1">
                        <a
                          href={`tel:${siteConfig.contact.phoneRaw}`}
                          className="fw-medium text-decoration-none"
                          style={{ color: 'var(--text)', fontSize: '0.925rem', lineHeight: '1.5', transition: 'color var(--transition-fast)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
                        >
                          {siteConfig.contact.phone}
                        </a>
                        <a
                          href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                          className="fw-medium text-decoration-none"
                          style={{ color: 'var(--text)', fontSize: '0.925rem', lineHeight: '1.5', transition: 'color var(--transition-fast)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
                        >
                          {siteConfig.contact.secondaryPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-2 rounded-3 text-primary mt-1 flex-shrink-0"
                      style={{ backgroundColor: 'var(--bg-soft)', border: '1px solid var(--border)' }}
                    >
                      <FiMail size={18} />
                    </div>
                    <div>
                      <div className="fw-semibold text-muted text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                        Email Address
                      </div>
                      <div className="mt-1">
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="fw-medium text-decoration-none"
                          style={{ color: 'var(--text)', fontSize: '0.925rem', lineHeight: '1.5', transition: 'color var(--transition-fast)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-light)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="p-2 rounded-3 text-primary mt-1 flex-shrink-0"
                      style={{ backgroundColor: 'var(--bg-soft)', border: '1px solid var(--border)' }}
                    >
                      <FiClock size={18} />
                    </div>
                    <div>
                      <div className="fw-semibold text-muted text-uppercase" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                        Business Hours
                      </div>
                      <div className="fw-medium mt-1" style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: '1.5' }}>
                        {siteConfig.contact.workingHours}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social links */}
                <div className="pt-3 mt-3 border-top d-flex align-items-center justify-content-between" style={{ borderColor: 'var(--border)' }}>
                  <span className="small text-muted fw-semibold">Connect with us:</span>
                  <div className="d-flex gap-2">
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-kr-outline p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '34px', height: '34px' }}
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={15} />
                    </a>
                    <a
                      href={siteConfig.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-kr-outline p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '34px', height: '34px' }}
                      aria-label="Twitter"
                    >
                      <FaTwitter size={15} />
                    </a>
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-kr-outline p-2 rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: '34px', height: '34px' }}
                      aria-label="GitHub"
                    >
                      <FaGithub size={15} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div
                className="card-glass p-2 rounded-4 shadow-sm overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)'
                }}
              >
                <div className="p-2 pb-1">
                  <div className="small fw-bold" style={{ color: 'var(--text)' }}>
                    {siteConfig.companyName} Campus Location
                  </div>
                  <div className="small text-muted" style={{ fontSize: '0.75rem' }}>
                    Dattani Trade Centre, Borivali West, Mumbai
                  </div>
                </div>
                <div className="rounded-3 overflow-hidden" style={{ height: '220px' }}>
                  <iframe
                    title="KR Infosoft Mumbai Location"
                    src={siteConfig.contact.googleMapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
