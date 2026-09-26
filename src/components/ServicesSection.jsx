import React from 'react';
import { Link } from 'react-router-dom';
import { FiCode, FiGlobe, FiSmartphone, FiCpu, FiCheck, FiArrowRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import servicesData from '../data/services';

const iconMap = {
  FiCode: FiCode,
  FiGlobe: FiGlobe,
  FiSmartphone: FiSmartphone,
  FiCpu: FiCpu
};

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding position-relative" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-xl">
        <SectionHeading
          title="Engineered For Speed, Scale &"
          highlight="Maximum Impact"
          subtitle="We specialize in the four pillars of modern digital technology. Every solution is architected with modern best practices, clean code, and zero technical debt."
        />

        <div className="row g-4">
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.icon] || FiCode;

            return (
              <div key={service.id} className="col-md-6 col-lg-6">
                <div
                  className="card-glass card-hover-lift h-100 p-4 p-lg-5 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    borderRadius: '18px',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--bg-card)'
                  }}
                >
                  {/* Decorative blade corner accent */}
                  <div
                    className="position-absolute top-0 end-0"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, transparent 50%, rgba(30, 167, 255, 0.15) 50%)',
                      zIndex: 1
                    }}
                  />

                  <div>
                    {/* Top row: Icon & Badge */}
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div
                        className="d-flex align-items-center justify-content-center text-white rounded-3 shadow-sm"
                        style={{
                          width: '54px',
                          height: '54px',
                          background: 'var(--accent-gradient)',
                          borderRadius: '14px'
                        }}
                      >
                        <IconComponent size={26} />
                      </div>

                      <span className="blade-tag">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--text)' }}>
                      {service.title}
                    </h3>
                    <p className="mb-4" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {service.shortDesc}
                    </p>

                    {/* Feature Checklist */}
                    <div className="mb-4">
                      <div className="small fw-bold text-uppercase mb-2" style={{ letterSpacing: '0.05em', color: 'var(--muted)', fontSize: '0.75rem' }}>
                        Key Capabilities:
                      </div>
                      <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="d-flex align-items-start gap-2 small">
                            <FiCheck
                              className="mt-1 flex-shrink-0"
                              style={{ color: 'var(--primary-light)', strokeWidth: '3' }}
                              size={15}
                            />
                            <span style={{ color: 'var(--text)' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom: Tech Stack Tags & Quote CTA */}
                  <div className="pt-3 border-top" style={{ borderColor: 'var(--border)' }}>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {service.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="badge"
                          style={{
                            backgroundColor: 'var(--bg-soft)',
                            color: 'var(--text-secondary)',
                            fontWeight: '500',
                            fontSize: '0.75rem',
                            border: '1px solid var(--border)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/contact?service=${service.id}`}
                      className="fw-semibold small d-inline-flex align-items-center gap-2 text-decoration-none"
                      style={{ color: 'var(--primary)' }}
                    >
                      <span>Request Quote for {service.title}</span>
                      <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
