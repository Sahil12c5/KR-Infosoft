import React from 'react';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import siteConfig from '../config/siteConfig';

export const FloatingActions = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    'Hello KR Infosoft! I would like to inquire about your software and IT services.'
  )}`;

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button */}
      <div
        className="position-fixed d-none d-md-block"
        style={{
          bottom: '30px',
          right: '30px',
          zIndex: 1040
        }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center text-white text-decoration-none shadow-lg position-relative"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease'
          }}
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08) translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
          }}
        >
          {/* Subtle pulsating beacon */}
          <span
            className="position-absolute"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              opacity: 0.4,
              animation: 'pulseGlow 2.5s infinite',
              zIndex: -1
            }}
          />
          <FaWhatsapp size={32} />
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar (Bottom of Screen) */}
      <div
        className="d-md-none position-fixed w-100 bottom-0 start-0 py-2 px-3 shadow-lg"
        style={{
          zIndex: 1045,
          backgroundColor: 'var(--bg-card)',
          borderTop: '1px solid var(--border)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)'
        }}
      >
        <div className="d-flex gap-2">
          {/* Call Now Button */}
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="btn btn-sm flex-fill d-flex align-items-center justify-content-center gap-2 py-2 fw-bold"
            style={{
              backgroundColor: 'var(--bg-soft)',
              color: 'var(--text)',
              border: '1px solid var(--border)',
              borderRadius: '10px'
            }}
          >
            <FiPhone size={17} style={{ color: 'var(--primary)' }} />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Chat Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm flex-fill d-flex align-items-center justify-content-center gap-2 py-2 fw-bold text-white"
            style={{
              backgroundColor: '#25D366',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
            }}
          >
            <FaWhatsapp size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
