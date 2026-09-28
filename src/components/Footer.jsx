import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowUp,
  FiLinkedin,
  FiInstagram
} from 'react-icons/fi';
import BrandLogo from './BrandLogo';
import siteConfig from '../config/siteConfig';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--navy-dark)',
        color: '#C0CFEA',
        borderTop: '1px solid rgba(30, 167, 255, 0.15)',
        position: 'relative'
      }}
      className="pt-5 pb-4"
    >
      <div className="container-xl">
        <div className="row g-4 mb-5">
          {/* Col 1: Brand Info */}
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <BrandLogo lightMode={true} height={48} />
            </div>
            <p className="small mb-4" style={{ lineHeight: '1.7', color: '#A5BBE3', maxWidth: '340px' }}>
              KR Infosoft is a high-growth IT solutions provider. We design, build, and deploy enterprise-grade software, responsive web portals, native mobile apps, and custom AI intelligence systems tailored for measurable business ROI.
            </p>
            {/* Social Icons */}
            <div className="d-flex align-items-center gap-2">
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.12)'
                }}
                aria-label="Instagram"
              >
                <FiInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-white fw-bold mb-3" style={{ letterSpacing: '0.03em' }}>
              Services
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <a href="#services" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Software Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  AI Solutions & LLMs
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none" style={{ color: 'var(--primary-light)' }}>
                  Request Custom Service →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-white fw-bold mb-3" style={{ letterSpacing: '0.03em' }}>
              Quick Links
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Home
                </Link>
              </li>
              <li>
                <a href="#services" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#process" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Our 7-Step Process
                </a>
              </li>
              <li>
                <a href="#industries" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Industries We Serve
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none" style={{ color: '#A5BBE3' }}>
                  Contact & Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="col-lg-4 col-md-6">
            <h6 className="text-white fw-bold mb-3" style={{ letterSpacing: '0.03em' }}>
              Contact Us
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-3 mb-0">
              <li className="d-flex align-items-start gap-2">
                <FiMapPin className="text-primary-light mt-1 flex-shrink-0" style={{ color: 'var(--primary-light)' }} />
                <span>{siteConfig.contact.address.fullAddress}</span>
              </li>
              <li className="d-flex align-items-start gap-2">
                <FiPhone className="text-primary-light flex-shrink-0 mt-1" style={{ color: 'var(--primary-light)' }} />
                <div className="d-flex flex-column gap-1">
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="text-decoration-none"
                    style={{ color: '#C0CFEA', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C0CFEA')}
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.secondaryPhoneRaw}`}
                    className="text-decoration-none"
                    style={{ color: '#C0CFEA', transition: 'color var(--transition-fast)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C0CFEA')}
                  >
                    {siteConfig.contact.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FiMail className="text-primary-light flex-shrink-0" style={{ color: 'var(--primary-light)' }} />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-decoration-none"
                  style={{ color: '#C0CFEA', transition: 'color var(--transition-fast)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#C0CFEA')}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FiClock className="text-primary-light flex-shrink-0" style={{ color: 'var(--primary-light)' }} />
                <span style={{ color: '#A5BBE3' }}>{siteConfig.contact.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          className="pt-4 border-top d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
        >
          <div className="small text-center text-md-start" style={{ color: '#8EA4C9' }}>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved. Registered in {siteConfig.contact.address.city}, {siteConfig.contact.address.country}.
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="small text-muted">
              Built with precision & high performance
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="btn btn-sm d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'rgba(30, 167, 255, 0.15)',
                color: 'var(--primary-light)',
                border: '1px solid rgba(30, 167, 255, 0.3)'
              }}
              aria-label="Back to top"
              title="Back to top"
            >
              <FiArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
