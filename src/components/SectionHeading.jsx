import React from 'react';

export const SectionHeading = ({
  badge = '',
  title = '',
  highlight = '',
  subtitle = '',
  center = true,
  dark = false,
  className = ''
}) => {
  return (
    <div className={`mb-5 ${center ? 'text-center mx-auto' : 'text-start'} ${className}`} style={{ maxWidth: center ? '720px' : '100%' }}>
      {badge && (
        <div className="mb-3">
          <span className="blade-badge">
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--primary-light)',
                display: 'inline-block'
              }}
            />
            {badge}
          </span>
        </div>
      )}

      <h2
        className="fw-bold mb-3"
        style={{
          color: dark ? '#FFFFFF' : 'var(--text)',
          letterSpacing: '-0.025em',
          fontSize: 'clamp(1.5rem, 4.5vw, 2.35rem)',
          lineHeight: 1.25
        }}
      >
        {title}{' '}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>

      {subtitle && (
        <p
          className="lead mb-0 mx-auto"
          style={{
            color: dark ? '#C0CFEA' : 'var(--muted)',
            lineHeight: 1.6,
            fontSize: 'clamp(0.88rem, 2.5vw, 1.05rem)',
            maxWidth: '680px'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
