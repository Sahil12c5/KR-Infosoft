import React from 'react';
import SectionHeading from './SectionHeading';
import processSteps from '../data/process';

export const ProcessSection = () => {
  return (
    <section id="process" className="section-padding" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container-xl">
        <SectionHeading
          title="From Idea to Production in"
          highlight="7 Seamless Steps"
          subtitle="A battle-tested development roadmap that eliminates guesswork, minimizes delays, and keeps you in full control at every stage."
        />

        {/* Desktop Horizontal Stepper / Grid */}
        <div className="d-none d-lg-block position-relative mb-4">
          {/* Connecting horizontal line */}
          <div
            className="position-absolute top-0 start-0 w-100"
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, #0084FF 0%, #014DAF 50%, #01368C 100%)',
              top: '24px',
              zIndex: 1,
              borderRadius: '2px'
            }}
          />

          <div className="row g-3 position-relative" style={{ zIndex: 2 }}>
            {processSteps.map((step) => (
              <div key={step.step} className="col">
                <div className="d-flex flex-column align-items-center text-center">
                  {/* Step Pill */}
                  <div
                    className="d-flex align-items-center justify-content-center fw-bold text-white mb-3 shadow"
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'var(--navy-gradient)',
                      border: '3px solid var(--primary-light)',
                      fontSize: '0.95rem'
                    }}
                  >
                    {step.step}
                  </div>

                  {/* Step Details */}
                  <div
                    className="card-glass p-3 rounded-3 w-100 h-100 card-hover-lift"
                    style={{
                      border: '1px solid var(--border)',
                      backgroundColor: 'var(--bg-card)',
                      minHeight: '180px'
                    }}
                  >
                    <h4 className="fw-bold mb-1" style={{ fontSize: '1.05rem', color: 'var(--text)' }}>
                      {step.title}
                    </h4>
                    <div
                      className="small fw-semibold mb-2"
                      style={{ color: 'var(--primary)', fontSize: '0.75rem' }}
                    >
                      {step.tagline}
                    </div>
                    <p className="small mb-0 text-muted" style={{ fontSize: '0.75rem', lineHeight: '1.45' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="d-lg-none position-relative ps-4 ps-sm-5">
          {/* Vertical continuous line */}
          <div
            className="position-absolute top-0 bottom-0 start-0 ms-2 ms-sm-3"
            style={{
              width: '3px',
              background: 'linear-gradient(180deg, #0084FF 0%, #014DAF 50%, #01368C 100%)',
              borderRadius: '2px'
            }}
          />

          <div className="d-flex flex-column gap-4">
            {processSteps.map((step) => (
              <div key={step.step} className="position-relative">
                {/* Step indicator node */}
                <div
                  className="position-absolute d-flex align-items-center justify-content-center fw-bold text-white shadow-sm"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--navy-gradient)',
                    border: '2px solid var(--primary-light)',
                    fontSize: '0.8rem',
                    left: '-32px',
                    top: '12px',
                    transform: 'translateX(-50%)',
                    zIndex: 2
                  }}
                >
                  {step.step}
                </div>

                {/* Content Box */}
                <div
                  className="card-glass p-3 p-sm-4 rounded-3 card-hover-lift"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <h4 className="fw-bold mb-0" style={{ fontSize: '1.1rem', color: 'var(--text)' }}>
                      {step.title}
                    </h4>
                    <span className="blade-tag">
                      {step.tagline}
                    </span>
                  </div>
                  <p className="small mb-0" style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
