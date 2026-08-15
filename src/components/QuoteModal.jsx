import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import './QuoteModal.css';

export default function QuoteModal({ isOpen, onClose, title = "Request a Consultation" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Residential Design',
    budget: '$10k - $25k',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={resetAndClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className="modal-success-state">
            <CheckCircle2 size={54} className="success-icon" />
            <h3 className="modal-title">Consultation Requested!</h3>
            <p className="modal-desc">
              Thank you, {formData.name}. Our senior interior designer will review your details and reach out within 24 hours.
            </p>
            <button className="btn-gold-filled" onClick={resetAndClose}>
              DONE
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="section-tag">INTRIA INTERIOR DESIGN</span>
              <h3 className="modal-title">{title}</h3>
              <p className="modal-desc">Tell us about your project vision and requirements.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Your Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Ananya Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="hello@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Service Required</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option>Residential Design</option>
                    <option>Commercial Design</option>
                    <option>Interior Decor & Styling</option>
                    <option>Space Planning</option>
                    <option>Custom Bespoke Furniture</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option>$5k - $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Project Details / Vision</label>
                <textarea 
                  rows="3"
                  placeholder="Describe your space, timeline, style preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-gold-filled submit-btn">
                SUBMIT REQUEST
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
