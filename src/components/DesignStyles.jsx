import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './DesignStyles.css';

export default function DesignStyles({ onOpenQuote }) {
  const [activeStyleIndex, setActiveStyleIndex] = useState(0);

  const styles = [
    {
      title: 'Modern',
      desc: 'Clean lines, balanced forms and contemporary finishes.',
      img: '/images/project_1.png',
      tag: 'MODERN AESTHETIC'
    },
    {
      title: 'Minimal',
      desc: 'Simple, refined spaces where every element has a purpose.',
      img: '/images/service_custom.png',
      tag: 'MINIMALIST LUXURY'
    },
    {
      title: 'Contemporary',
      desc: 'A sophisticated combination of comfort, functionality and modern aesthetics.',
      img: '/images/project_4.png',
      tag: 'URBAN CONTEMPORARY'
    },
    {
      title: 'Luxury',
      desc: 'Rich materials, refined detailing and an elevated sense of elegance.',
      img: '/images/project_2.png',
      tag: 'OPULENT RESIDENCE'
    },
    {
      title: 'Modern Indian',
      desc: 'Contemporary design inspired by Indian warmth, textures and traditions.',
      img: '/images/project_3.png',
      tag: 'HERITAGE REFINED'
    }
  ];

  return (
    <section id="design-styles" className="design-styles-section">
      <div className="design-styles-container">
        {/* Header */}
        <div className="design-styles-header">
          <div className="section-tag">
            <Sparkles size={14} className="gold-sparkle-icon" />
            <span>INTERIOR STYLES</span>
          </div>
          <h2 className="section-title-light">Find Your Interior Style</h2>
          <p className="design-styles-subheading">
            Discover design aesthetics tailored to reflect your lifestyle, character, and sanctuary.
          </p>
        </div>

        {/* 5 Styles Grid */}
        <div className="styles-grid-5">
          {styles.map((item, idx) => (
            <div 
              key={item.title} 
              className={`style-card ${activeStyleIndex === idx ? 'active' : ''}`}
              onMouseEnter={() => setActiveStyleIndex(idx)}
              onClick={() => setActiveStyleIndex(idx)}
            >
              <div className="style-img-wrapper">
                <img src={item.img} alt={item.title} className="style-card-img" />
                <div className="style-img-overlay"></div>
                <span className="style-tag-badge">{item.tag}</span>
              </div>

              <div className="style-content">
                <h3 className="style-title">{item.title}</h3>
                <p className="style-desc">{item.desc}</p>

                <button 
                  className="style-explore-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenQuote) onOpenQuote(`Explore ${item.title} Style`);
                  }}
                >
                  <span>EXPLORE {item.title.toUpperCase()}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
