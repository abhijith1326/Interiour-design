import React, { useState, useEffect } from 'react';
import { Lightbulb, Gem, Settings, ArrowRight, Play } from 'lucide-react';
import './About.css';

export default function About({ onOpenAboutModal }) {
  const line1Full = "Designing Spaces";
  const line2PrefixFull = "With ";
  const line2AccentFull = "Purpose";
  const totalLength = line1Full.length + line2PrefixFull.length + line2AccentFull.length;

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (textIndex < totalLength) {
      timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 75);
    } else {
      timer = setTimeout(() => {
        setTextIndex(0);
      }, 3500);
    }
    return () => clearTimeout(timer);
  }, [textIndex, totalLength]);

  const line1 = line1Full.slice(0, textIndex);
  const line2Prefix = textIndex > line1Full.length 
    ? line2PrefixFull.slice(0, textIndex - line1Full.length) 
    : "";
  const line2Accent = textIndex > (line1Full.length + line2PrefixFull.length)
    ? line2AccentFull.slice(0, textIndex - line1Full.length - line2PrefixFull.length)
    : "";

  const features = [
    {
      icon: <Lightbulb size={20} />,
      title: 'Thoughtful Design',
      desc: 'Spatial concepts designed around your personality, lifestyle and habits.'
    },
    {
      icon: <Gem size={20} />,
      title: 'Quality Materials',
      desc: 'Handpicked sustainable materials engineered for elegance and longevity.'
    },
    {
      icon: <Settings size={20} />,
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
        
        {/* Left Column Content */}
        <div className="about-left-col">
          {/* Section Tag (Line removed as requested) */}
          <div className="about-section-tag">
            <span className="about-tag-text">ABOUT SPACE DESIGN</span>
          </div>

          {/* Typewriter Heading */}
          <h2 className="about-main-title">
            {line1}
            {textIndex > line1Full.length && <br />}
            {line2Prefix}
            {line2Accent && <span className="title-accent-italic">{line2Accent}</span>}
          </h2>

          {/* Paragraphs */}
          <div className="about-text-blocks">
            <p className="about-desc-para">
              At SPACE DESIGN, we believe great interiors are more than beautiful spaces. They are an expression of your personality, lifestyle and aspirations.
            </p>
            <p className="about-desc-para">
              Our approach combines thoughtful design, quality materials and precise execution to create spaces that are both visually stunning and practical for everyday living.
            </p>
            <p className="about-desc-para">
              Whether you're creating a new home, renovating an existing space or dersigning a commercial environment, our team takes care of every detail from the first idea to the final finish.
            </p>
          </div>

          {/* CTA Buttons Row */}
          <div className="about-actions-row">
            <button className="btn-about-story" onClick={onOpenAboutModal}>
              <span>OUR STORY</span>
              <ArrowRight size={15} />
            </button>
            <button className="btn-about-approach" onClick={onOpenAboutModal}>
              <div className="play-icon-circle">
                <Play size={12} fill="#121316" color="#121316" />
              </div>
              <span>WATCH OUR APPROACH</span>
            </button>
          </div>

          {/* 3 Features Cards */}
          <div className="about-features-row">
            {features.map((item, idx) => (
              <div key={idx} className="about-feature-card">
                <div className="feature-circle-icon">
                  {item.icon}
                </div>
                <h3 className="feature-card-title">{item.title}</h3>
                <p className="feature-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="about-stats-banner">
            {stats.map((st, i) => (
              <div key={i} className="stat-banner-item">
                <span className="stat-num-val">{st.number}</span>
                <span className="stat-label-text">{st.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column Showcase */}
        <div className="about-right-col">
          <div className="about-visual-frame">
            
            {/* Top-Right Circular Badge */}
            <div className="circular-seal-badge">
              <svg viewBox="0 0 100 100" className="circular-svg-text">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text font-size="8.8" letterSpacing="2.2">
                  <textPath href="#circlePath">
                    INTERIORS FOR A BRIGHTER TOMORROW •
                  </textPath>
                </text>
              </svg>
              <div className="seal-center-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ab8339" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
            </div>

            {/* Main Showcase Image */}
            <img 
              src="/images/about_img.png" 
              alt="Designing Spaces With Purpose" 
              className="about-showcase-img" 
            />

            {/* Dark Floating Badge Top Left */}
            <div className="dark-badge badge-top-left">
              <div className="dark-badge-inner">
                <span className="dark-badge-text">SPACES</span>
                <span className="dark-badge-text">THAT</span>
                <span className="dark-badge-gold">INSPIRE</span>
                <div className="dark-badge-line"></div>
              </div>
            </div>

            {/* Dark Floating Badge Bottom Right */}
            <div className="dark-badge badge-bottom-right">
              <div className="dark-badge-inner">
                <div className="dark-badge-line"></div>
                <span className="dark-badge-text">A BETTER</span>
                <span className="dark-badge-text">WAY TO</span>
                <span className="dark-badge-gold-italic">LIVE</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Quote Block */}
          <div className="about-quote-container">
            <div className="quote-mark-icon">“</div>
            <div className="quote-body">
              <p className="quote-text-content">
                “Good design transforms how you live, work and feel every day.”
              </p>
              <div className="quote-gold-divider"></div>
              <span className="quote-studio-label">SPACE DESIGN STUDIO</span>
            </div>

            {/* Background Leaf Illustration */}
            <div className="botanical-art-bg">
              <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="#d8af66" strokeWidth="0.8" opacity="0.4">
                <path d="M50 95 C 40 70, 20 50, 5 30 C 25 35, 45 45, 50 95 Z" />
                <path d="M50 95 C 60 65, 80 40, 95 20 C 75 30, 55 45, 50 95 Z" />
                <path d="M50 95 C 48 50, 40 20, 30 5" />
                <path d="M50 95 C 52 50, 60 20, 70 5" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
