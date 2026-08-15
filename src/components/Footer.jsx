import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        {/* 5 Column Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-col col-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                </svg>
              </div>
              <div className="logo-text">
                <span className="brand-name">INTRIA</span>
                <span className="brand-sub">INTERIOR DESIGN</span>
              </div>
            </div>

            <p className="footer-bio">
              We design beautiful, functional and inspiring spaces that reflect your style and personality.
            </p>

            <div className="footer-socials">
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 0 0-3.16 19.49c-.09-.82-.17-2.08.03-2.98l1.2-5.11s-.3-.61-.3-1.5c0-1.4.82-2.45 1.83-2.45.86 0 1.28.65 1.28 1.43 0 .87-.55 2.18-.84 3.39-.24 1.02.51 1.85 1.52 1.85 1.83 0 3.24-1.93 3.24-4.71 0-2.46-1.77-4.18-4.3-4.18-2.93 0-4.65 2.2-4.65 4.47 0 .88.34 1.83.77 2.35.08.1.1.19.07.31l-.29 1.18c-.04.18-.15.22-.35.13-1.31-.61-2.13-2.53-2.13-4.07 0-3.32 2.41-6.37 6.96-6.37 3.65 0 6.5 2.6 6.5 6.08 0 3.63-2.29 6.55-5.47 6.55-1.07 0-2.07-.56-2.42-1.21l-.66 2.51c-.24.92-.88 2.07-1.31 2.76A10 10 0 1 0 12 2z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>

            <span className="copyright-text">© 2024 Intria Interior Design. All Rights Reserved.</span>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-links">
              <li><a href="#services">Residential Design</a></li>
              <li><a href="#services">Commercial Design</a></li>
              <li><a href="#services">Interior Decor</a></li>
              <li><a href="#services">Space Planning</a></li>
              <li><a href="#services">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONTACT US</h4>
            <ul className="contact-info-list">
              <li>
                <MapPin size={15} className="contact-icon" />
                <span>123, Design Street, Kochi, Kerala, India</span>
              </li>
              <li>
                <Phone size={15} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={15} className="contact-icon" />
                <span>hello@intria.com</span>
              </li>
              <li>
                <Clock size={15} className="contact-icon" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">NEWSLETTER</h4>
            <p className="newsletter-desc">Subscribe to our newsletter for latest updates and ideas.</p>
            
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>

            {subscribed && (
              <p className="newsletter-success">Thank you for subscribing!</p>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
