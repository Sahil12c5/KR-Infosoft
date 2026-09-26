import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export const CtaBanner = () => {
  return (
    <section className="py-5 position-relative overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-xl">
        <div
          className="p-4 p-md-5 rounded-4 position-relative overflow-hidden shadow-lg"
          style={{
            background: 'var(--accent-gradient)',
            color: '#FFFFFF'
          }}
        >
          {/* Decorative angular blade motifs */}
          <div
            className="position-absolute pointer-events-none d-none d-md-block"
            style={{
              top: '-30%',
              right: '-10%',
              width: '450px',
              height: '450px',
              background: 'rgba(255, 255, 255, 0.08)',
              clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
              transform: 'rotate(15deg)'
            }}
          />

          <div className="row align-items-center position-relative g-4" style={{ zIndex: 2 }}>
            <div className="col-lg-8">
              <span
                className="badge bg-white text-primary px-3 py-2 rounded-pill fw-bold mb-3 shadow-sm"
                style={{ fontSize: '0.8rem' }}
              >
                ⚡ Rapid Project Onboarding
              </span>

              <h2 className="display-6 fw-bold text-white mb-3" style={{ letterSpacing: '-0.025em' }}>
                Ready to Build Your Next High-Impact Digital Project?
              </h2>

              <p className="lead fs-6 text-white mb-4" style={{ opacity: 0.92, maxWidth: '640px' }}>
                Schedule a complimentary 30-minute discovery consultation with our senior solutions architect. Get a comprehensive technical roadmap, timeline, and fixed-cost estimation within 24 hours.
              </p>

              <div className="d-flex flex-wrap gap-3 small fw-semibold">
                <div className="d-flex align-items-center gap-1">
                  <FiCheckCircle size={16} />
                  <span>Strict NDA Protection</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <FiCheckCircle size={16} />
                  <span>Transparent Estimation</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                  <FiCheckCircle size={16} />
                  <span>No Obligation Consultation</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-lg-end">
              <Link to="/contact" className="btn-kr-white text-decoration-none">
                <span>Contact Us Today</span>
                <FiArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
