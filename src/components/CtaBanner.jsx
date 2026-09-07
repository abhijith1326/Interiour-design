import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import './CtaBanner.css';

export default function CtaBanner({ onSchedule, onStartProject }) {
  const handlePrimary = () => {
    if (onStartProject) onStartProject();
    else if (onSchedule) onSchedule("Start Your Project");
  };

  const handleSecondary = () => {
    if (onSchedule) onSchedule("Book a Consultation");
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-box-lux">
          <div className="cta-content-left">
            <div className="cta-icon-pill">
              <Calendar size={18} />
              <span>LET'S TALK INTERIORS</span>
            </div>

            <h2 className="cta-title">Let's Create a Space That Feels Like You.</h2>
            <p className="cta-subtitle">
              Have a space in mind? Tell us what you're imagining, and let's turn your vision into a beautifully designed reality.
            </p>
          </div>

          <div className="cta-buttons-wrap">
            <button className="btn-gold-filled" onClick={handlePrimary}>
              <span>START YOUR PROJECT</span>
              <ArrowRight size={16} />
            </button>

            <button className="btn-outline-glass" onClick={handleSecondary}>
              <span>BOOK A CONSULTATION</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
