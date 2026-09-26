import React, { useEffect, useState, useRef } from 'react';
import siteConfig from '../config/siteConfig';

// Reusable Count-Up Component
const CounterItem = ({ targetNumber, suffix, label, description }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const duration = 1600; // ms
          const stepTime = 20; // 50 updates/sec
          const totalSteps = duration / stepTime;
          const increment = targetNumber / totalSteps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.25 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, targetNumber]);

  return (
    <div ref={itemRef} className="text-center px-2 px-sm-3 py-2 py-sm-3 h-100">
      <div
        className="fw-bold mb-1"
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.65rem, 5vw, 2.5rem)',
          lineHeight: 1.15,
          color: 'var(--primary)'
        }}
      >
        <span>{count}</span>
        <span style={{ color: 'var(--primary-light)' }}>{suffix}</span>
      </div>

      <div className="fw-bold mb-1 text-uppercase" style={{ fontSize: '0.88rem', letterSpacing: '0.04em', color: 'var(--text)' }}>
        {label}
      </div>

      <div className="small text-muted" style={{ fontSize: '0.78rem', lineHeight: '1.4' }}>
        {description}
      </div>
    </div>
  );
};

export const TrustStrip = () => {
  return (
    <section className="py-4 border-top border-bottom" style={{ backgroundColor: 'var(--bg-soft)', borderColor: 'var(--border)' }}>
      <div className="container-xl">
        <div className="row g-3 divide-y divide-md-0">
          {siteConfig.stats.map((stat, idx) => (
            <div key={stat.id} className="col-6 col-lg-3 position-relative">
              <CounterItem
                targetNumber={stat.targetNumber}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
              {/* Vertical divider line on desktop */}
              {idx < siteConfig.stats.length - 1 && (
                <div
                  className="d-none d-lg-block position-absolute top-50 end-0 translate-middle-y"
                  style={{
                    height: '50px',
                    width: '1px',
                    backgroundColor: 'var(--border)'
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
