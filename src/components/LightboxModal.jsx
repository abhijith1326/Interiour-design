import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({ activeItem, items = [], onClose, onNavigate, onOpenQuote }) {
  if (!activeItem) return null;

  const currentIndex = items.findIndex((i) => i.id === activeItem.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(items[currentIndex - 1]);
    } else {
      onNavigate(items[items.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      onNavigate(items[currentIndex + 1]);
    } else {
      onNavigate(items[0]);
    }
  };

  const highlights = [
    'Custom modular kitchen',
    'Full-height wardrobes',
    'Contemporary TV unit',
    'Warm ambient lighting',
    'Custom storage',
    'Feature walls',
    'Space-efficient furniture'
  ];

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close project details">
          <X size={22} />
        </button>

        {/* Modal Main Body Grid */}
        <div className="lightbox-body-grid">
          {/* Left Large Project Image & Gallery Controls */}
          <div className="lightbox-gallery-side">
            <div className="lightbox-main-img-wrap">
              <img 
                src={activeItem.img} 
                alt={activeItem.name || activeItem.title} 
                className="lightbox-main-img" 
              />

              <button className="lightbox-nav nav-prev" onClick={handlePrev} aria-label="Previous project">
                <ChevronLeft size={22} />
              </button>

              <button className="lightbox-nav nav-next" onClick={handleNext} aria-label="Next project">
                <ChevronRight size={22} />
              </button>

              <span className="lightbox-counter-pill">
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            <div className="lightbox-thumbnails-row">
              {items.map((item) => (
                <div 
                  key={item.id}
                  className={`thumb-item ${activeItem.id === item.id ? 'active' : ''}`}
                  onClick={() => onNavigate(item)}
                >
                  <img src={item.img} alt={item.name || item.title} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="lightbox-details-side">
            <div className="project-badge-tag">
              <Sparkles size={14} className="gold-sparkle-icon" />
              <span>PROJECT SPECIFICATIONS</span>
            </div>

            <h2 className="project-detail-title">
              {activeItem.name || activeItem.title || 'Contemporary 3BHK Residence'}
            </h2>

            {/* Meta Attributes Table Grid */}
            <div className="project-meta-grid">
              <div className="meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-val">
                  <MapPin size={13} className="inline-gold-icon" />
                  {activeItem.location || 'Trivandrum, Kerala'}
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-label">Project Type</span>
                <span className="meta-val">
                  <Layers size={13} className="inline-gold-icon" />
                  {activeItem.type || 'Residential Interior'}
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-label">Design Style</span>
                <span className="meta-val">
                  <Sparkles size={13} className="inline-gold-icon" />
                  {activeItem.style || 'Contemporary Minimal'}
                </span>
              </div>
            </div>

            {/* Project Overview */}
            <div className="project-overview-block">
              <h4 className="overview-heading">Project Overview</h4>
              <p className="overview-text">
                {activeItem.overview || 'This residence was designed around clean lines, warm finishes and efficient storage. The objective was to create a sophisticated yet comfortable home that works effortlessly for everyday living.'}
              </p>
            </div>

            {/* Design Highlights List */}
            <div className="project-highlights-block">
              <h4 className="overview-heading">Design Highlights</h4>
              <div className="highlights-pills-wrap">
                {highlights.map((h, i) => (
                  <div key={i} className="highlight-pill-item">
                    <CheckCircle2 size={13} className="pill-check-icon" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Card */}
            <div className="project-cta-banner">
              <div className="cta-banner-text">
                <span className="cta-question">Want a similar space?</span>
                <p className="cta-sub">Let's discuss bringing your vision to life.</p>
              </div>

              <button 
                className="btn-gold-filled"
                onClick={() => {
                  onClose();
                  if (onOpenQuote) onOpenQuote("Start Your Project");
                }}
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
