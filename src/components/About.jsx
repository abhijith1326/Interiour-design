import React, { useState } from 'react';
import { Compass, ShieldCheck, UserCheck, ArrowRight, Award, Sparkles } from 'lucide-react';
import './About.css';

export default function About({ onOpenAboutModal }) {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Compass size={22} />,
      title: 'Thoughtful Design',
      desc: 'Spatial concepts designed around your personality, lifestyle and habits.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Quality Materials',
      desc: 'Handpicked sustainable materials engineered for elegance and longevity.'
    },
    {
      icon: <UserCheck size={22} />,
      title: 'Precise Execution',
      desc: 'Managing every detail from concept to white-glove final installation.'
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
            <span>ABOUT SPACE DESIGN</span>
          </div>

          <h2 className="section-title-light">
            Designing Spaces With Purpose
          </h2>

          <div className="about-paragraphs-wrap">
            <p className="about-paragraph">
              At SPACE DESIGN, we believe great interiors are more than beautiful spaces. They are an expression of your personality, lifestyle and aspirations.
            </p>

            <p className="about-paragraph">
              Our approach combines thoughtful design, quality materials and precise execution to create spaces that are both visually stunning and practical for everyday living.
            </p>

            <p className="about-paragraph">
              Whether you're creating a new home, renovating an existing space or designing a commercial environment, our team takes care of every detail from the first idea to the final finish.
            </p>
          </div>

          {/* Highlight Text Card */}
          <div className="about-highlight-box">
            <div className="highlight-badge">
              <Sparkles size={14} className="gold-sparkle-icon" />
              <span>PHILOSOPHY</span>
            </div>
            <div className="highlight-phrases">
              <span className="highlight-phrase">Design with intention.</span>
              <span className="highlight-phrase">Create with precision.</span>
              <span className="highlight-phrase">Live beautifully.</span>
            </div>
          </div>

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
            <button className="btn-gold-filled" onClick={onOpenAboutModal}>
              <span>LEARN MORE ABOUT US</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Side Visual Showcase */}
        <div className="about-image-wrapper">
          <img 
            src="/images/about_img.png" 
            alt="Space Design Showcase - Modern Luxury Living and Dining Room" 
            className="about-img"
          />
          <div className="about-image-border"></div>
          
          <div className="experience-floating-badge">
            <Award size={24} className="gold-award-icon" />
            <div>
              <span className="badge-title">SPACE DESIGN Studio</span>
              <span className="badge-sub">Excellence in Interior Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
