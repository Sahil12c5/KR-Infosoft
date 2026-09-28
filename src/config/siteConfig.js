/**
 * KR Infosoft - Central Configuration File
 * All company information, contact details, stats, social links,
 * and form endpoints are centralized here for effortless customization.
 */

export const siteConfig = {
  // Brand details
  companyName: "KR Infosoft",
  legalName: "KR Infosoft Solutions Pvt. Ltd.",
  tagline: "Software • Web • Mobile • AI Solutions",
  foundedYear: 2018,

  // Contact Information (Updated)
  contact: {
    email: "info@krinfosoft.in",
    salesEmail: "info@krinfosoft.in",
    supportEmail: "info@krinfosoft.in",
    phone: "+91 8928433903",
    phoneRaw: "+918928433903", // for tel: links
    secondaryPhone: "+91 9326333750",
    secondaryPhoneRaw: "+919326333750",
    whatsapp: "+91 8928433903",
    whatsappRaw: "918928433903", // without '+' for wa.me/ links
    address: {
      street: "102-1st Floor, Dattani Trade Centre, Chandavarkar Road, Borivali West (Near Borivali Railway Station)",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: "400092",
      fullAddress: "102-1st Floor, Dattani Trade Centre, Chandavarkar Road, Borivali West, Mumbai - 400092 (Near Borivali Railway Station)"
    },
    workingHours: "Monday – Saturday: 9:30 AM – 7:00 PM IST (24/7 Priority Support for Clients)",
    googleMapEmbedUrl: "https://maps.google.com/maps?q=Dattani+Trade+Centre,+Chandavarkar+Road,+Borivali+West,+Mumbai+400092&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  // Social Links
  socials: {
    linkedin: "https://linkedin.com/company/krinfosoft",
    twitter: "https://twitter.com/krinfosoft",
    github: "https://github.com/krinfosoft",
    facebook: "https://facebook.com/krinfosoft",
    instagram: "https://instagram.com/krinfosoft"
  },

  // Key Stats / Trust Numbers (Animated count-up on homepage)
  stats: [
    {
      id: "projects",
      targetNumber: 150,
      suffix: "+",
      label: "Projects Delivered",
      description: "Across enterprise software, web, apps & AI models"
    },
    {
      id: "clients",
      targetNumber: 85,
      suffix: "+",
      label: "Happy Clients",
      description: "Global startups to high-growth enterprises"
    },
    {
      id: "experience",
      targetNumber: 7,
      suffix: "+",
      label: "Years of Experience",
      description: "Engineering robust, scalable digital solutions"
    },
    {
      id: "support",
      targetNumber: 24,
      suffix: "/7",
      label: "Dedicated Support",
      description: "Guaranteed SLA and post-deployment maintenance"
    }
  ],

  // Form Submission Configuration (Frontend-Only)
  // Switch between 'emailjs' (Option A - Default) or 'web3forms' (Option B)
  formService: {
    provider: "emailjs", // Options: 'emailjs' | 'web3forms'

    // Option A: EmailJS Configuration
    // Set up your free account at https://www.emailjs.com/
    emailjs: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_krinfosoft",
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_krinfosoft",
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY"
    },

    // Option B: Web3Forms (Instant zero-backend setup)
    // Get your free access key at https://web3forms.com/
    web3forms: {
      accessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY"
    }
  },

  // Budget Options for Contact Form
  budgetRanges: [
    { value: "under-5k", label: "$3,000 – $5,000 (INR 2.5L – 4L)" },
    { value: "5k-15k", label: "$5,000 – $15,000 (INR 4L – 12L)" },
    { value: "15k-30k", label: "$15,000 – $30,000 (INR 12L – 25L)" },
    { value: "30k-plus", label: "$30,000+ (INR 25L+ Enterprise)" }
  ],

  // Requirement Options for Contact Form
  requirementOptions: [
    { value: "mobile-app", label: "Build a Mobile App" },
    { value: "custom-software", label: "Develop Custom Software" },
    { value: "ai-genai", label: "AI / GenAI Solution" },
    { value: "ecommerce-app", label: "Build an E-Commerce Website/App" },
    { value: "crm-erp-automation", label: "CRM / ERP / Business Automation" },
    { value: "api-backend", label: "API / Backend Development" },
    { value: "ui-ux-design", label: "UI/UX Design" },
    { value: "software-website-modification", label: "Existing Software / Website Modification" },
    { value: "cloud-database", label: "Cloud & Database Solutions" },
    { value: "software-testing-automation", label: "Software Testing & Automation" },
    { value: "idea-consultation", label: "I Have an Idea — Need Consultation" },
    { value: "other", label: "Other" }
  ],

  // Backward compatibility aliases
  get serviceOptions() {
    return this.requirementOptions;
  },
  get programOptions() {
    return this.requirementOptions;
  }
};

export default siteConfig;

