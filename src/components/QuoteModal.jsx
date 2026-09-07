import React, { useState } from 'react';
import { X, CheckCircle2, Send } from 'lucide-react';
import './QuoteModal.css';

export default function QuoteModal({ isOpen, onClose, title = "Let's Talk About Your Space" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Complete Home',
    location: '',
    budget: '',
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
            <h3 className="modal-title">Enquiry Sent Successfully!</h3>
            <p className="modal-desc">
              Thank you, {formData.name}. Our interior design team at Space Design will review your project details and get in touch with you shortly.
            </p>
            <button className="btn-gold-filled" onClick={resetAndClose}>
              DONE
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="section-tag">SPACE DESIGN INTERIORS</span>
              <h3 className="modal-title">{title}</h3>
              <p className="modal-desc">
                Tell us a little about your project. Our team will get in touch with you to understand your requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="info@spacedesign.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Project Type *</label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  >
                    <option>Complete Home</option>
                    <option>Modular Kitchen</option>
                    <option>Bedroom</option>
                    <option>Living Room</option>
                    <option>Wardrobe</option>
                    <option>Commercial</option>
                    <option>Renovation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Location *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Trivandrum, Kerala"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Approximate Budget</label>
                <input 
                  type="text" 
                  placeholder="e.g. ₹5 Lakhs - ₹15 Lakhs"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Tell Us About Your Project</label>
                <textarea 
                  rows="3"
                  placeholder="Describe your space, timeline, style preferences or specific needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-gold-filled submit-btn">
                <span>SEND ENQUIRY</span>
                <Send size={15} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
