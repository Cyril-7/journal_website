import React, { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import logo from './assets/logo.png';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for reveal animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealElements.forEach(el => observer.unobserve(el));
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
          <Link to="/browse" onClick={() => setMobileMenuOpen(false)}>Browse Articles</Link>
          <Link to="/submit" onClick={() => setMobileMenuOpen(false)}>Submit Paper</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        <div className="nav-actions">
          <Link to="/subscribe" className="btn btn-primary nav-subscribe-btn">
            Subscribe
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
              E-ISSN <span style={{ color: 'var(--accent-secondary)' }}>2831-402X</span> &nbsp; | &nbsp; 
              P-ISSN <span style={{ color: 'var(--accent-secondary)' }}>2831-4011</span>
            </p>
          </div>
          <div className="footer-links">
            <h4>Journals</h4>
            <ul>
              <li><Link to="/journals">All Journals</Link></li>
              <li><Link to="/browse">Browse Articles</Link></li>
              <li><Link to="/submit">Submit Paper</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><Link to="/authors">Instructions</Link></li>
              <li><Link to="/ethics">Ethics</Link></li>
              <li><Link to="/editorial-board">Board</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/subscribe">Subscription</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 SISC Research Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
