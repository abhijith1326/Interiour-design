import React, { useState } from 'react';
import { Compass, ShieldCheck, UserCheck, ArrowRight, Award } from 'lucide-react';
import './About.css';

export default function About({ onOpenAboutModal }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Compass size={22} />,
      title: 'Creative Design',
      desc: 'Innovative ideas and spatial concepts that bring custom spaces to life.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Quality Assured',
      desc: 'Premium sustainable materials and meticulous craftsmanship guaranteed.'
    },
    {
      icon: <UserCheck size={22} />,
      title: 'Client Focused',
      desc: 'Your distinct vision, lifestyle habits, and taste guide every step.'
    }
  ];

  const stats = [
    { number: '12+', label: 'Years Experience' },
    { number: '250+', label: 'Projects Completed' },
    { number: '98%', label: 'Satisfied Clients' },
    { number: '15+', label: 'Design Awards' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side Content */}
        <div className="about-content">
          <div className="section-tag">
            <span>ABOUT US</span>
          </div>

          <h2 className="section-title-light">
            Designing Spaces<br />That Tell Your Story
          </h2>

          <p className="about-paragraph">
            At Intria Interior Design, we believe every space has the potential to inspire. Our passion lies in creating interiors that are not only beautiful but also functional, sustainable and uniquely tailored to your individual rhythm.
          </p>

          {/* 3 Columns Features with React active state */}
          <div className="about-features-grid">
            {features.map((item, idx) => (
              <div 
                key={idx} 
                className={`feature-item ${activeFeature === idx ? 'active' : ''}`}
                onClick={() => setActiveFeature(idx)}
              >
                <div className="feature-icon-box">
                  {item.icon}
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Key Stats Counter Grid */}
          <div className="about-stats-grid">
            {stats.map((st, i) => (
              <div key={i} className="stat-box">
                <span className="stat-number">{st.number}</span>
                <span className="stat-label">{st.label}</span>
              </div>
            ))}
          </div>

          <div className="about-cta-wrap">
            <button className="btn-outline-dark" onClick={onOpenAboutModal}>
              <span>READ MORE ABOUT US</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Right Side Visual Showcase */}
        <div className="about-image-wrapper">
          <img 
            src="/images/about_img.png" 
            alt="Intria Interior Showcase - Modern Luxury Living and Dining Room" 
            className="about-img"
          />
          <div className="about-image-border"></div>
          
          <div className="experience-floating-badge">
            <Award size={24} className="gold-award-icon" />
            <div>
              <span className="badge-title">Award-Winning Studio</span>
              <span className="badge-sub">Excellence in Interior Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
