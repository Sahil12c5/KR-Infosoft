 import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Auto-scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 position-relative">
      <ScrollToTop />
      
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Routed Page Content */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Global Floating Actions (WhatsApp & Mobile Call Bar) */}
      <FloatingActions />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
