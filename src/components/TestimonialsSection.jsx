import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import testimonialsData from '../data/testimonials';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-soft-section position-relative">
      <div className="container-xl">
        <SectionHeading
          badge="Client Endorsements"
          title="What Our Partners Say About"
          highlight="Working With Us"
          subtitle="Real reviews from technology founders, enterprise VPs, and engineering directors who relied on KR Infosoft to ship their critical software."
        />

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div
              className="card-glass p-4 p-md-5 rounded-4 shadow-sm position-relative"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)'
              }}
            >
              {/* Large Quote Mark */}
              <div
                className="position-absolute top-0 start-0 m-4 d-none d-sm-block text-gradient opacity-25"
                style={{
                  fontSize: '5rem',
                  lineHeight: '1',
                  fontFamily: 'serif',
                  pointerEvents: 'none'
                }}
              >
                “
              </div>

              <div className="position-relative" style={{ zIndex: 2 }}>
                {/* Star Rating */}
                <div className="d-flex align-items-center gap-1 mb-3 text-warning fs-5">
                  {'★'.repeat(current.rating)}
                </div>

                {/* Feedback Quote */}
                <blockquote
                  className="fs-5 fw-medium mb-4"
                  style={{
                    color: 'var(--text)',
                    lineHeight: '1.7',
                    minHeight: '110px'
                  }}
                >
                  "{current.feedback}"
                </blockquote>

                {/* Client Profile Info & Navigation Controls */}
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between gap-3 pt-3 border-top" style={{ borderColor: 'var(--border)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="rounded-circle shadow-sm"
                      style={{ width: '56px', height: '56px', objectFit: 'cover' }}
                    />
                    <div>
                      <h4 className="fw-bold mb-0" style={{ fontSize: '1.05rem', color: 'var(--text)' }}>
                        {current.name}
                      </h4>
                      <div className="small text-muted" style={{ fontSize: '0.82rem' }}>
                        {current.role}, <strong style={{ color: 'var(--primary)' }}>{current.company}</strong>
                      </div>
                      <div className="small d-flex align-items-center gap-1 mt-1" style={{ color: '#10B981', fontSize: '0.75rem' }}>
                        <FiCheckCircle size={12} />
                        <span>Verified IT Client</span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="d-flex align-items-center gap-2 mt-2 mt-sm-0">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="btn btn-sm d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '42px',
                        height: '42px',
                        backgroundColor: 'var(--bg-soft)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)'
                      }}
                      aria-label="Previous testimonial"
                    >
                      <FiChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn btn-sm d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '42px',
                        height: '42px',
                        backgroundColor: 'var(--bg-soft)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)'
                      }}
                      aria-label="Next testimonial"
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Dot Indicators */}
                <div className="d-flex justify-content-center gap-2 mt-4">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className="border-0 p-0"
                      style={{
                        width: currentIndex === idx ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: currentIndex === idx ? 'var(--primary)' : 'var(--border)',
                        transition: 'all 0.3s ease'
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
