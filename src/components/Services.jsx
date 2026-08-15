import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Services.css';

export default function Services({ onSelectService, onViewAllServices }) {
  const [activeServiceNum, setActiveServiceNum] = useState('01');

  const servicesList = [
    {
      num: '01',
      tag: 'RESIDENTIAL DESIGN',
      title: 'Residential Design',
      desc: 'Beautiful, functional luxury homes tailored to your modern lifestyle.',
      img: '/images/service_residential.png'
    },
    {
      num: '02',
      tag: 'COMMERCIAL DESIGN',
      title: 'Commercial Design',
      desc: 'Functional, high-impact workspaces and boutique commercial interiors.',
      img: '/images/service_commercial.png'
    },
    {
      num: '03',
      tag: 'INTERIOR DECOR',
      title: 'Interior Decor',
      desc: 'Curated art, custom textiles, and ambient styling for exquisite ambiance.',
      img: '/images/service_decor.png'
    },
    {
      num: '04',
      tag: 'SPACE PLANNING',
      title: 'Space Planning',
      desc: 'Optimization of spatial layouts, circulation flow, and ergonomic living.',
      img: '/images/service_planning.png'
    },
    {
      num: '05',
      tag: 'CUSTOM SOLUTIONS',
      title: 'Custom Solutions',
      desc: 'Bespoke cabinetry, custom furniture design, and architectural millwork.',
      img: '/images/service_custom.png'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="section-tag">
            <span>OUR SERVICES</span>
          </div>
          <h2 className="section-title-dark">What We Do</h2>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {servicesList.map((item) => (
            <div 
              key={item.num} 
              className={`service-card ${activeServiceNum === item.num ? 'active' : ''}`}
              onMouseEnter={() => setActiveServiceNum(item.num)}
              onClick={() => onSelectService && onSelectService(item)}
            >
              <div className="card-top-header">
                <span className="service-num">{item.num}</span>
                <span className="service-badge-title">{item.tag}</span>
              </div>
              <p className="service-card-desc">{item.desc}</p>
              
              <div className="service-img-frame">
                <img src={item.img} alt={item.title} className="service-img" />
                <div className="service-img-overlay">
                  <span className="inquire-btn-badge">
                    <Sparkles size={14} /> INQUIRE NOW
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="services-footer-cta">
          <button className="btn-outline-gold" onClick={onViewAllServices}>
            <span>VIEW ALL SERVICES</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
