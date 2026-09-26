import React from 'react';
import { Link } from 'react-router-dom';

export const BrandLogo = ({
  height,
  lightMode = false,
  className = ''
}) => {
  return (
    <Link
      to="/"
      className={`brand-logo-link d-inline-flex align-items-center text-decoration-none ${className}`}
      aria-label="KR Infosoft Home"
    >
      <div className={`brand-logo-wrapper ${lightMode ? 'brand-logo-dark-surface' : ''}`}>
        <img
          src="/logo.png"
          alt="KR Infosoft - Software • Web • Mobile • AI Solutions"
          className="brand-logo-img"
          style={{
            ...(height ? { height: `${height}px` } : {}),
            width: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </div>
    </Link>
  );
};

export default BrandLogo;

