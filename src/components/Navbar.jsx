import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import BrandLogo from './BrandLogo';
import ThemeToggle from './ThemeToggle';
import siteConfig from '../config/siteConfig';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Handle sticky navbar elevation on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section spy if on home page
      if (location.pathname === '/') {
        const sections = ['home', 'services', 'why-us', 'process', 'industries'];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Smooth scroll handler for nav items
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/#' + targetId);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className="sticky-top"
      style={{
        zIndex: 1050,
        backgroundColor: scrolled ? 'var(--glass-bg)' : 'var(--bg)',
        backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container-xl py-2 py-lg-3">
        <nav className="d-flex align-items-center justify-content-between">
          {/* Logo */}
          <BrandLogo className="navbar-brand-logo" />

          {/* Desktop Nav Links */}
          <div className="d-none d-lg-flex align-items-center gap-3 gap-xl-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="fw-medium text-decoration-none nav-link-custom"
              style={{
                color: activeSection === 'home' && location.pathname === '/' ? 'var(--primary)' : 'var(--text)',
                fontSize: '0.95rem'
              }}
            >
              Home
            </a>

            <a
              href="#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="fw-medium text-decoration-none nav-link-custom"
              style={{
                color: activeSection === 'services' && location.pathname === '/' ? 'var(--primary)' : 'var(--text)',
                fontSize: '0.95rem'
              }}
            >
              Services
            </a>

            <a
              href="#why-us"
              onClick={(e) => handleNavClick(e, 'why-us')}
              className="fw-medium text-decoration-none nav-link-custom"
              style={{
                color: activeSection === 'why-us' && location.pathname === '/' ? 'var(--primary)' : 'var(--text)',
                fontSize: '0.95rem'
              }}
            >
              Why Us
            </a>

            <a
              href="#process"
              onClick={(e) => handleNavClick(e, 'process')}
              className="fw-medium text-decoration-none nav-link-custom"
              style={{
                color: activeSection === 'process' && location.pathname === '/' ? 'var(--primary)' : 'var(--text)',
                fontSize: '0.95rem'
              }}
            >
              Process
            </a>

            <a
              href="#industries"
              onClick={(e) => handleNavClick(e, 'industries')}
              className="fw-medium text-decoration-none nav-link-custom"
              style={{
                color: activeSection === 'industries' && location.pathname === '/' ? 'var(--primary)' : 'var(--text)',
                fontSize: '0.95rem'
              }}
            >
              Industries
            </a>

            <Link
              to="/contact"
              className="fw-medium text-decoration-none nav-link-custom"
              style={{
                color: location.pathname === '/contact' ? 'var(--primary)' : 'var(--text)',
                fontSize: '0.95rem'
              }}
            >
              Contact
            </Link>
          </div>

          {/* Right Actions: Theme Toggle & CTA */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <ThemeToggle />

            <Link to="/contact" className="btn-kr-gradient text-white text-decoration-none">
              <span>Get a Free Quote</span>
              <FiArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Hamburger & Theme Toggle */}
          <div className="d-flex d-lg-none align-items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              className="btn p-2 text-decoration-none border rounded"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
                color: 'var(--text)'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className="d-lg-none pt-3 pb-3 mt-2 border-top"
            style={{
              borderColor: 'var(--border)',
              backgroundColor: 'var(--bg)',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <div className="d-flex flex-column gap-3">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="py-2 px-3 rounded fw-semibold text-decoration-none"
                style={{
                  color: 'var(--text)',
                  backgroundColor: activeSection === 'home' ? 'var(--bg-soft)' : 'transparent'
                }}
              >
                Home
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="py-2 px-3 rounded fw-semibold text-decoration-none"
                style={{
                  color: 'var(--text)',
                  backgroundColor: activeSection === 'services' ? 'var(--bg-soft)' : 'transparent'
                }}
              >
                Services
              </a>
              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, 'why-us')}
                className="py-2 px-3 rounded fw-semibold text-decoration-none"
                style={{
                  color: 'var(--text)',
                  backgroundColor: activeSection === 'why-us' ? 'var(--bg-soft)' : 'transparent'
                }}
              >
                Why Choose Us
              </a>
              <a
                href="#process"
                onClick={(e) => handleNavClick(e, 'process')}
                className="py-2 px-3 rounded fw-semibold text-decoration-none"
                style={{
                  color: 'var(--text)',
                  backgroundColor: activeSection === 'process' ? 'var(--bg-soft)' : 'transparent'
                }}
              >
                Our Process
              </a>
              <a
                href="#industries"
                onClick={(e) => handleNavClick(e, 'industries')}
                className="py-2 px-3 rounded fw-semibold text-decoration-none"
                style={{
                  color: 'var(--text)',
                  backgroundColor: activeSection === 'industries' ? 'var(--bg-soft)' : 'transparent'
                }}
              >
                Industries
              </a>
              <Link
                to="/contact"
                className="py-2 px-3 rounded fw-semibold text-decoration-none"
                style={{
                  color: 'var(--text)',
                  backgroundColor: location.pathname === '/contact' ? 'var(--bg-soft)' : 'transparent'
                }}
              >
                Contact
              </Link>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="btn-kr-gradient w-100 text-center text-white py-2"
                  style={{ borderRadius: '12px' }}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
