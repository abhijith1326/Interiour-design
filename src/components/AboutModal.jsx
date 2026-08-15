import React from 'react';
import { X, Award, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import './AboutModal.css';

export default function AboutModal({ isOpen, onClose, onOpenQuote }) {
  if (!isOpen) return null;

  return (
    <div className="about-modal-backdrop" onClick={onClose}>
      <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="about-modal-close" onClick={onClose} aria-label="Close details">
          <X size={20} />
        </button>

        <div className="about-modal-header">
          <div className="section-tag">
            <span>INTRIA ARCHITECTURAL STUDIO</span>
          </div>
          <h2 className="about-modal-title">Crafting Timeless Interiors Since 2012</h2>
          <p className="about-modal-subtitle">
            Where structural precision meets refined aesthetics to transform everyday spaces into extraordinary sanctuaries.
          </p>
        </div>

        <div className="about-modal-body">
          <div className="about-modal-grid">
            <div className="about-story-col">
              <h3>Our Philosophy</h3>
              <p>
                At INTRIA, interior design is not merely decoration—it is an intricate dialogue between architecture, natural illumination, and human experience. Founded in 2012 by master architects, our studio specializes in bespoke residential estates, luxury dining environments, and high-impact corporate headquarters.
              </p>
              <p>
                Every project begins with a deep listening process. We study how light moves through your rooms, how your family or company interacts, and what materials evoke emotion.
              </p>
            </div>

            <div className="about-highlights-col">
              <div className="highlight-card">
                <Users className="highlight-icon" size={24} />
                <div>
                  <h4>Master Craftsmanship</h4>
                  <p>In-house artisans, woodworkers, and lighting specialists.</p>
                </div>
              </div>

              <div className="highlight-card">
                <ShieldCheck className="highlight-icon" size={24} />
                <div>
                  <h4>Sustainable Materials</h4>
                  <p>Eco-conscious hardwoods, natural stone, and non-toxic finishes.</p>
                </div>
              </div>

              <div className="highlight-card">
                <Award className="highlight-icon" size={24} />
                <div>
                  <h4>Turnkey Execution</h4>
                  <p>From initial 3D design to white-glove furniture installation.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-modal-footer">
            <button className="btn-gold-filled" onClick={() => { onClose(); onOpenQuote("Book an Initial Design Consultation"); }}>
              <span>BOOK A CONSULTATION</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
