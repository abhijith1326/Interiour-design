import React, { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Services.css';

export default function Services({ onSelectService, onViewAllServices }) {
  const [activeServiceNum, setActiveServiceNum] = useState('01');

  const servicesList = [
    {
      num: '01',
      title: 'Modular Kitchen',
      tagline: 'Cook. Create. Connect.',
      desc: 'Functional, elegant kitchens designed around the way you cook, organise and live.',
      cta: 'Explore Kitchen Designs →',
      img: '/images/service_custom.png'
    },
    {
      num: '02',
      title: 'Living Room',
      tagline: 'Make Every Moment More Beautiful.',
      desc: 'Welcoming living spaces that balance comfort, character and contemporary design.',
      cta: 'Explore Living Rooms →',
      img: '/images/service_residential.png'
    },
    {
      num: '03',
      title: 'Bedroom',
      tagline: 'Designed for Comfort.',
      desc: 'Calm, comfortable and personalised bedrooms designed to make every day feel better.',
      cta: 'Explore Bedrooms →',
      img: '/images/service_decor.png'
    },
    {
      num: '04',
      title: 'Wardrobes',
      tagline: 'Storage That Works Beautifully.',
      desc: 'Beautifully integrated storage solutions that keep your home organised without compromising style.',
      cta: 'Explore Wardrobes →',
      img: '/images/service_planning.png'
    },
    {
      num: '05',
      title: 'Home Office',
      tagline: 'A Better Space to Think and Create.',
      desc: 'Ergonomic, quiet work environments engineered for focus, creativity and remote productivity.',
      cta: 'Explore Home Offices →',
      img: '/images/project_4.png'
    },
    {
      num: '06',
      title: 'Commercial Interiors',
      tagline: 'Spaces That Represent Your Brand.',
      desc: 'Professional environments designed to improve productivity, brand presence and customer experience.',
      cta: 'Explore Commercial →',
      img: '/images/service_commercial.png'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <div className="section-tag">
            <Sparkles size={14} className="gold-sparkle-icon" />
            <span>INTERIOR SOLUTIONS</span>
          </div>
          <h2 className="section-title-dark">Interior Solutions Designed Around You</h2>
          <p className="services-subheading">
            Whether you're designing one room or your entire property, Space Design offers customised interior solutions that combine aesthetics, functionality and quality.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid-lux">
          {servicesList.map((item) => (
            <div 
              key={item.num} 
              className={`service-card-lux ${activeServiceNum === item.num ? 'active' : ''}`}
              onMouseEnter={() => setActiveServiceNum(item.num)}
              onClick={() => onSelectService && onSelectService(item)}
            >
              <div className="card-header-badge">
                <span className="card-num-pill">{item.num}</span>
              </div>

              <h3 className="card-title-lux">{item.title}</h3>
              <p className="card-tagline-text">"{item.tagline}"</p>
              <p className="service-card-desc">{item.desc}</p>
              
              <div className="service-img-frame">
                <img src={item.img} alt={item.title} className="service-img" />
                <div className="service-img-overlay"></div>
              </div>

              <div className="card-bottom-cta">
                <span className="cta-link-text">{item.cta}</span>
              </div>
            </div>
          ))}
        </div>

        {/* View All / Consult CTA Button */}
        <div className="services-footer-cta">
          <button className="btn-outline-gold" onClick={onViewAllServices}>
            <span>DISCUSS YOUR INTERIOR VISION</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
