import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

export const NotFound = () => {
  return (
    <main
      className="d-flex align-items-center justify-content-center text-center py-5"
      style={{
        minHeight: '75vh',
        backgroundColor: 'var(--bg)'
      }}
    >
      <div className="container-xl">
        <div className="mx-auto" style={{ maxWidth: '550px' }}>
          {/* 404 Blade Number */}
          <div
            className="display-1 fw-bold mb-2 text-gradient"
            style={{
              fontSize: '7rem',
              letterSpacing: '-0.05em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            404
          </div>

          <span className="blade-badge mb-3">
            Page Not Found
          </span>

          <h1 className="h3 fw-bold mb-3" style={{ color: 'var(--text)' }}>
            Looks like this page took a wrong turn
          </h1>

          <p className="text-muted mb-4 fs-6">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back to the main site.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/" className="btn-kr-gradient text-decoration-none">
              <FiHome size={18} />
              <span>Back to Homepage</span>
            </Link>

            <Link to="/contact" className="btn-kr-outline text-decoration-none">
              <span>Contact Support</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
