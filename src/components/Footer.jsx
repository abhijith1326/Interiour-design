import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

export default function Footer({ onOpenQuote }) {
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
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Bio */}
          <div className="footer-col col-brand">
            <div className="footer-logo">
              <div className="logo-text">
                <span className="brand-name">Space Design</span>
                <span className="brand-tagline">Spaces That Inspire.</span>
              </div>
            </div>

            <p className="footer-bio">
              Interior design solutions created around your lifestyle, your vision and your space.
            </p>

            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                <span>Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <span>Facebook</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 0 0-3.16 19.49c-.09-.82-.17-2.08.03-2.98l1.2-5.11s-.3-.61-.3-1.5c0-1.4.82-2.45 1.83-2.45.86 0 1.28.65 1.28 1.43 0 .87-.55 2.18-.84 3.39-.24 1.02.51 1.85 1.52 1.85 1.83 0 3.24-1.93 3.24-4.71 0-2.46-1.77-4.18-4.3-4.18-2.93 0-4.65 2.2-4.65 4.47 0 .88.34 1.83.77 2.35.08.1.1.19.07.31l-.29 1.18c-.04.18-.15.22-.35.13-1.31-.61-2.13-2.53-2.13-4.07 0-3.32 2.41-6.37 6.96-6.37 3.65 0 6.5 2.6 6.5 6.08 0 3.63-2.29 6.55-5.47 6.55-1.07 0-2.07-.56-2.42-1.21l-.66 2.51c-.24.92-.88 2.07-1.31 2.76A10 10 0 1 0 12 2z" /></svg>
                <span>Pinterest</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#contact" onClick={() => onOpenQuote && onOpenQuote("Let's Talk About Your Space")}>Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">SERVICES</h4>
            <ul className="footer-links">
              <li><a href="#services">Modular Kitchens</a></li>
              <li><a href="#services">Living Rooms</a></li>
              <li><a href="#services">Bedrooms</a></li>
              <li><a href="#services">Wardrobes</a></li>
              <li><a href="#services">Commercial Interiors</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <ul className="contact-info-list">
              <li>
                <Phone size={15} className="contact-icon" />
                <a href="tel:+91XXXXXXXXXX">Phone: +91 XXXXX XXXXX</a>
              </li>
              <li>
                <Mail size={15} className="contact-icon" />
                <a href="mailto:info@spacedesign.com">Email: info@spacedesign.com</a>
              </li>
              <li>
                <MapPin size={15} className="contact-icon" />
                <span>Location: Trivandrum, Kerala</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="newsletter-wrap">
              <h5 className="newsletter-title">Stay Inspired</h5>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-submit-btn" aria-label="Subscribe">
                  <ArrowRight size={15} />
                </button>
              </form>
              {subscribed && <p className="newsletter-success">Subscribed!</p>}
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <span className="copyright-text">© 2026 Space Design. All Rights Reserved. Spaces That Inspire.</span>
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
