import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = ({ className = '' }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('kr_theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kr_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`btn btn-sm d-flex align-items-center justify-content-center p-2 rounded-circle border ${className}`}
      style={{
        width: '38px',
        height: '38px',
        backgroundColor: 'var(--bg-card)',
        borderColor: 'var(--border)',
        color: 'var(--text)',
        transition: 'all 0.2s ease',
        cursor: 'pointer'
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <FiSun size={18} className="text-warning" />
      ) : (
        <FiMoon size={18} style={{ color: 'var(--primary)' }} />
      )}
    </button>
  );
};

export default ThemeToggle;
