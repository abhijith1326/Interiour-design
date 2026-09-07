import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import './SeoSection.css';

export default function SeoSection() {
  const keywords = [
    'Interior designers in Trivandrum',
    'Interior design Trivandrum',
    'Home interiors Trivandrum',
    'Interior designers Kerala',
    'Modular kitchen Trivandrum',
    'Home interior design Kerala',
    'Residential interior design',
    'Commercial interior design',
    'Complete home interiors',
    'Luxury interior design Trivandrum'
  ];

  return (
    <section className="seo-section">
      <div className="seo-container">
        <div className="seo-card">
          <div className="seo-header">
            <div className="section-tag">
              <MapPin size={14} className="gold-sparkle-icon" />
              <span>TRIVANDRUM & KERALA</span>
            </div>
            <h2 className="seo-title">Interior Designers in Trivandrum</h2>
          </div>

          <div className="seo-body">
            <p className="seo-paragraph">
              Space Design provides customised <strong>interior design solutions</strong> for homes and commercial spaces in Trivandrum and across Kerala. As leading <strong>interior designers in Trivandrum</strong>, our services include <strong>modular kitchen Trivandrum</strong> setups, living room interiors, bedroom designs, wardrobes, <strong>complete home interiors</strong> and <strong>commercial interior design</strong> solutions.
            </p>

            <p className="seo-paragraph">
              Our <strong>home interior design Kerala</strong> approach focuses on understanding your lifestyle, optimising your space and creating <strong>residential interior design</strong> concepts that combine functionality with contemporary aesthetics. From initial consultation and space planning to material selection and execution, we deliver <strong>luxury interior design Trivandrum</strong> homeowners trust to bring their vision to life.
            </p>
          </div>

          {/* Location & Keyword Badges */}
          <div className="seo-keyword-pills">
            {keywords.map((kw, i) => (
              <span key={i} className="seo-pill">
                <Sparkles size={12} className="pill-star" />
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
