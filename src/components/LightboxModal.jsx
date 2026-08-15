import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './LightboxModal.css';

export default function LightboxModal({ activeItem, items = [], onClose, onNavigate }) {
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

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close image">
        <X size={24} />
      </button>

      <button className="lightbox-nav nav-prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
        <ChevronLeft size={28} />
      </button>

      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        <img src={activeItem.img} alt={activeItem.title} className="lightbox-image" />
        
        <div className="lightbox-caption">
          <span className="lightbox-category">{activeItem.category}</span>
          <h3 className="lightbox-title">{activeItem.title}</h3>
        </div>
      </div>

      <button className="lightbox-nav nav-next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
        <ChevronRight size={28} />
      </button>
    </div>
  );
}
