import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import logo from './assets/logo.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const active = (path: string) => location.pathname === path ? 'nav-active' : '';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = location.pathname === '/';
  const navbarClass = `navbar ${ (scrolled || !isHome) ? 'scrolled' : '' } ${ mobileMenuOpen ? 'mobile-active' : '' }`;

  return (
    <nav className={navbarClass}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src={logo} alt="SISC Logo" className="navbar-logo-img" />
          <span>SISC</span>
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link to="/" className={active('/')} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className={active('/about')} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/journals" onClick={() => setMobileMenuOpen(false)}>Journals</Link>
          <Link to="/editorial-board" className={active('/editorial-board')} onClick={() => setMobileMenuOpen(false)}>Editorial Board</Link>
          <Link to="/archive" className={active('/archive')} onClick={() => setMobileMenuOpen(false)}>Issues &amp; Archives</Link>
          <Link to="/browse" onClick={() => setMobileMenuOpen(false)}>Browse Articles</Link>
          <Link to="/news" className={active('/news')} onClick={() => setMobileMenuOpen(false)}>News</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary nav-subscribe-btn">
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
              <span>SISC</span>
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
          <p>© 2026 SISC Research Group. All rights reserved.</p>
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
