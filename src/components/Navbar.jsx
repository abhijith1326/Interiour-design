import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_LINKS = [
  { name: 'HOME', href: '#home', id: 'home' },
  { name: 'ABOUT', href: '#about', id: 'about' },
  { name: 'SERVICES', href: '#services', id: 'services' },
  { name: 'PROJECTS', href: '#projects', id: 'projects' },
  { name: 'BLOG', href: '#blog', id: 'blog' },
  { name: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
  { name: 'CONTACT', href: '#contact', id: 'contact' },
];

export default function Navbar({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section scrollSpy logic
      const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(Boolean);
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-logo">
          <div className="logo-icon-wrapper">
            <img src="/logo.png" alt="Space Design Logo" className="brand-logo-img" />
          </div>
          <div className="logo-text">
            <span className="brand-name">Space Design</span>
            <span className="brand-sub">SPACES THAT INSPIRE</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="navbar-actions">
          <button onClick={onOpenQuote} className="btn-quote">
            GET A QUOTE
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`mobile-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <button 
              className="btn-quote mobile-quote" 
              onClick={() => {
                setMobileOpen(false);
                onOpenQuote();
              }}
            >
              GET A QUOTE
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
