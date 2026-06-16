import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import logo from './assets/logo.png';

function Navbar() {
  const location = useLocation();
  const active = (path: string) => location.pathname === path ? 'nav-active' : '';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close dropdown when clicking outside (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close all on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <Link to="/" className="logo" onClick={closeAll}>
            <img src={logo} alt="SISC Logo" className="navbar-logo-img" />
            <div className="logo-text-group">
              <span className="logo-title">SISC</span>
              <span className="logo-subtitle">Studies in Indo-Semitic Christianity</span>
            </div>
          </Link>

          <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <Link to="/" className={active('/')} onClick={closeAll}>Home</Link>

            {/* About dropdown */}
            <div className={`nav-dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
              <div
                className="nav-dropdown-trigger"
                onClick={() => toggleDropdown('about')}
                aria-expanded={openDropdown === 'about'}
              >
                About
                <span className={`dropdown-arrow ${openDropdown === 'about' ? 'open' : ''}`}>▼</span>
              </div>
              <div className="dropdown-menu">
                <Link to="/about" onClick={closeAll}>About JSISC</Link>
                <Link to="/editorial-board" onClick={closeAll}>Editorial Board</Link>
                <Link to="/contact" onClick={closeAll}>Contact the Editorial Office</Link>
              </div>
            </div>

            {/* Browse Issues dropdown */}
            <div className={`nav-dropdown ${openDropdown === 'browse' ? 'open' : ''}`}>
              <div
                className="nav-dropdown-trigger"
                onClick={() => toggleDropdown('browse')}
                aria-expanded={openDropdown === 'browse'}
              >
                Browse Issues
                <span className={`dropdown-arrow ${openDropdown === 'browse' ? 'open' : ''}`}>▼</span>
              </div>
              <div className="dropdown-menu">
                <Link to="/archive" onClick={closeAll}>All Issues</Link>
              </div>
            </div>

            {/* Contributions dropdown */}
            <div className={`nav-dropdown ${openDropdown === 'contributions' ? 'open' : ''}`}>
              <div
                className="nav-dropdown-trigger"
                onClick={() => toggleDropdown('contributions')}
                aria-expanded={openDropdown === 'contributions'}
              >
                Contributions
                <span className={`dropdown-arrow ${openDropdown === 'contributions' ? 'open' : ''}`}>▼</span>
              </div>
              <div className="dropdown-menu">
                <Link to="/contact" onClick={closeAll}>Submit Manuscript</Link>
                <Link to="/authors" onClick={closeAll}>Instructions for Authors</Link>
                <Link to="/authors" onClick={closeAll}>Manuscript Preparation</Link>
              </div>
            </div>

            {/* Contact Us inside mobile drawer */}
            <div className="mobile-drawer-cta">
              <Link to="/contact" className="btn btn-primary mobile-drawer-btn" onClick={closeAll}>
                Contact Us
              </Link>
            </div>
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary nav-subscribe-btn desktop-only-btn" onClick={closeAll}>
              Contact Us
            </Link>
            <button
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeAll} aria-hidden="true" />
      )}
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <img src={logo} alt="SISC Logo" className="footer-logo-img" />
              <div className="logo-text-group">
                <span className="logo-title">SISC</span>
                <span className="logo-subtitle">Studies in Indo-Semitic Christianity</span>
              </div>
            </div>
            <p className="footer-desc">
              Advancing scholarship on Indo-Semitic Christianity, the Malankara Church,
              and Asian Christian heritage. Peer-reviewed. Open-access.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              E-ISSN <span style={{ color: 'var(--accent-secondary)' }}>Applied / Pending</span> &nbsp; | &nbsp; 
              ISSN Registration in progress with CSIR-NIScPR, India
            </p>
          </div>
          <div className="footer-links">
            <h4>Journals</h4>
            <ul>
              <li><Link to="/journals">All Journals</Link></li>
              <li><Link to="/editorial-board">Editorial Board</Link></li>
              <li><Link to="/archive">Issues &amp; Archives</Link></li>
              <li><Link to="/browse">Browse Articles</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/authors">Instructions</Link></li>
              <li><Link to="/ethics">Ethics</Link></li>
              <li><Link to="/news">News &amp; Updates</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 SISC Research Group. All rights reserved.<br />
            Built by <a href="https://tenvix.org" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Tenvix Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Setup intersection observer for reveal animations on the newly loaded route page
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
