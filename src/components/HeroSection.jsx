import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import HeroVisual from './HeroVisual';


export const HeroSection = () => {
  return (
    <section
      id="home"
      className="position-relative overflow-hidden pt-5 pb-5 pb-lg-6"
      style={{
        background: 'radial-gradient(circle at 80% 20%, rgba(30, 167, 255, 0.12) 0%, rgba(11, 99, 229, 0.04) 50%, transparent 70%)',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Decorative Angular Wing/Blade Shapes in Background */}
      <div
        className="position-absolute d-none d-lg-block pointer-events-none"
        style={{
          top: '-10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          background: 'linear-gradient(135deg, rgba(30, 167, 255, 0.08) 0%, rgba(11, 99, 229, 0.02) 100%)',
          clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
          transform: 'rotate(-15deg)',
          zIndex: 0
        }}
      />
      <div
        className="position-absolute d-none d-lg-block pointer-events-none"
        style={{
          bottom: '5%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, rgba(11, 99, 229, 0.06) 0%, transparent 70%)',
          clipPath: 'polygon(0% 0%, 100% 30%, 80% 100%, 0% 80%)',
          zIndex: 0
        }}
      />

      <div className="container-xl position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center g-4 g-lg-5">
          {/* Orbiting Services Constellation Visual (Shown FIRST on smartphone) */}
          <div className="col-lg-6 order-1 order-lg-2 text-center mb-2 mb-lg-0">
            <HeroVisual />
          </div>

          {/* Persuasive Headline & CTAs (Shown SECOND on smartphone) */}
          <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
            {/* Main Headline */}
            <h1
              className="fw-bold mb-3 mb-lg-4"
              style={{
                fontSize: 'clamp(1.75rem, 5.5vw, 3.25rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.03em'
              }}
            >
              We Build <span className="text-gradient">Software, Web, Mobile & AI Solutions</span> That Grow Your Business
            </h1>

            {/* Subtext */}
            <p
              className="lead mb-4 mx-auto mx-lg-0"
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                fontSize: 'clamp(0.925rem, 2.5vw, 1.15rem)',
                maxWidth: '560px'
              }}
            >
              KR Infosoft is your full-cycle technology partner. We translate complex business requirements into fast, scalable, and visually captivating digital products that increase revenue and streamline operations.
            </p>

            {/* Value bullets */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 gap-sm-3 mb-4">
              <div className="d-flex align-items-center gap-2 small fw-semibold" style={{ color: 'var(--text)' }}>
                <FiCheckCircle style={{ color: 'var(--primary-light)' }} />
                <span>Zero Technical Debt</span>
              </div>
              <div className="d-flex align-items-center gap-2 small fw-semibold" style={{ color: 'var(--text)' }}>
                <FiCheckCircle style={{ color: 'var(--primary-light)' }} />
                <span>On-Time Sprint Delivery</span>
              </div>
              <div className="d-flex align-items-center gap-2 small fw-semibold" style={{ color: 'var(--text)' }}>
                <FiCheckCircle style={{ color: 'var(--primary-light)' }} />
                <span>Transparent Milestone Pricing</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-stretch align-items-sm-center gap-3">
              <Link to="/contact" className="btn-kr-gradient text-decoration-none text-center">
                <span>Get a Free Quote</span>
                <FiArrowRight size={18} />
              </Link>

              <a href="#services" className="btn-kr-outline text-decoration-none text-center">
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust rating snippet */}
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 mt-4 pt-2">
              <div className="d-flex" style={{ color: '#F59E0B' }}>
                {'★'.repeat(5)}
              </div>
              <span className="small fw-medium" style={{ color: 'var(--muted)' }}>
                Rated <strong style={{ color: 'var(--text)' }}>4.9/5</strong> by 85+ Enterprise & Startup Leaders
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
