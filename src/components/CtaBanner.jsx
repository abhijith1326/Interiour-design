import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import './CtaBanner.css';

export default function CtaBanner({ onSchedule }) {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-box">
          <div className="cta-left">
            <div className="cta-icon-box">
              <Calendar size={24} />
            </div>

            <div className="cta-text-wrap">
              <h2 className="cta-title">Let's Create Something Beautiful Together</h2>
              <p className="cta-subtitle">Book a consultation with our experts and bring your dream space to life.</p>
            </div>
          </div>

          <button className="btn-gold-filled" onClick={onSchedule}>
            <span>SCHEDULE A CONSULTATION</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
