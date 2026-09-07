import React from 'react';
import { X, Award, Users, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
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
            <Sparkles size={14} className="gold-sparkle-icon" />
            <span>ABOUT SPACE DESIGN</span>
          </div>
          <h2 className="about-modal-title">We Design Spaces That Feel Like Home</h2>
        </div>

        <div className="about-modal-body">
          <div className="about-modal-grid">
            <div className="about-story-col">
              <p className="about-lead-para">
                Space Design is an interior design and execution studio focused on creating meaningful, functional and beautiful spaces.
              </p>
              <p>
                We work closely with our clients to understand how they live, what they value and how they want their space to feel. This understanding becomes the foundation for every design we create.
              </p>
              <p>
                From concept development and space planning to material selection, execution and final installation, we bring together creativity and craftsmanship to deliver interiors that are made to last.
              </p>
              <p>
                For us, interior design isn't simply about following trends. It's about creating spaces that remain relevant, comfortable and uniquely yours.
              </p>

              {/* Closing Statement Callout */}
              <div className="about-closing-box">
                <p className="closing-statement-text">
                  "Your space tells your story. We help you design it."
                </p>
              </div>
            </div>

            <div className="about-highlights-col">
              <div className="highlight-card">
                <Users className="highlight-icon" size={24} />
                <div>
                  <h4>Client-Centered Vision</h4>
                  <p>Designing around how you live, what you value and your daily rhythm.</p>
                </div>
              </div>

              <div className="highlight-card">
                <ShieldCheck className="highlight-icon" size={24} />
                <div>
                  <h4>Craftsmanship & Quality</h4>
                  <p>Bringing together creativity and durable materials engineered to last.</p>
                </div>
              </div>

              <div className="highlight-card">
                <Award className="highlight-icon" size={24} />
                <div>
                  <h4>End-to-End Execution</h4>
                  <p>From 3D spatial planning to white-glove site delivery and setup.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-modal-footer">
            <button className="btn-gold-filled" onClick={() => { onClose(); onOpenQuote("Let's Talk About Your Space"); }}>
              <span>LET'S TALK ABOUT YOUR SPACE</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
