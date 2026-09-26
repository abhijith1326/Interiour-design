import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import './SeoSection.css';

export default function SeoSection() {
  const keywords = [
    'Interior designers Kazhakuttam',
    'Interior designers in Trivandrum',
    'Space Design Kazhakuttam',
    'Home interiors Kazhakuttam',
    'Modular kitchen Kazhakuttam',
    'Interior designers Kerala',
    'Home interior design Kerala',
    'Residential interior design',
    'Commercial interior design',
    'Luxury interior design Trivandrum'
  ];

  return (
    <section className="seo-section">
      <div className="seo-container">
        <div className="seo-card">
          <div className="seo-header">
            <div className="section-tag">
              <MapPin size={14} className="gold-sparkle-icon" />
              <span>KAZHAKUTTAM, TRIVANDRUM & KERALA</span>
            </div>
            <h2 className="seo-title">Interior Designers in Kazhakuttam, Trivandrum</h2>
          </div>

          <div className="seo-body">
            <p className="seo-paragraph">
              <strong>Space Design</strong> (located at Nexus Building, First Floor, Pallinada, Kazhakuttam) provides customised <strong>interior design solutions</strong> for homes and commercial spaces in Kazhakuttam, Trivandrum and across Kerala. As leading <strong>interior designers in Kazhakuttam</strong> and Trivandrum, our services include <strong>modular kitchen setups</strong>, living room interiors, bedroom designs, wardrobes, <strong>complete home interiors</strong> and <strong>commercial interior design</strong> solutions.
            </p>

            <p className="seo-paragraph">
              Our <strong>home interior design Kerala</strong> approach focuses on understanding your lifestyle, optimising your space and creating <strong>residential interior design</strong> concepts that combine functionality with contemporary aesthetics. From initial consultation and 3D spatial planning to material selection and final execution, we deliver <strong>luxury interior design Trivandrum</strong> homeowners trust to bring their vision to life.
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
