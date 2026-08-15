import React from 'react';
import { X, Calendar, Clock, User } from 'lucide-react';
import './BlogModal.css';

export default function BlogModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="blog-modal-backdrop" onClick={onClose}>
      <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="blog-modal-close" onClick={onClose} aria-label="Close article">
          <X size={20} />
        </button>

        <div className="blog-modal-hero">
          <img src={article.img} alt={article.title} />
          <span className="blog-modal-category">{article.category}</span>
        </div>

        <div className="blog-modal-body">
          <h2 className="blog-modal-title">{article.title}</h2>
          
          <div className="blog-modal-meta">
            <span className="meta-item"><Calendar size={14} /> {article.date}</span>
            <span className="meta-item"><Clock size={14} /> {article.readTime}</span>
            <span className="meta-item"><User size={14} /> By Intria Design Team</span>
          </div>

          <div className="blog-modal-text">
            <p className="lead-paragraph">{article.excerpt}</p>
            <p>
              Interior architecture is more than aesthetics—it defines how we feel, move, and experience our living environments. When designing high-end spaces, balance between functionality and visual rhythm is essential.
            </p>
            <h3>Key Design Principles</h3>
            <ul>
              <li><strong>Proportion & Scale:</strong> Aligning custom furniture size with architectural ceiling height.</li>
              <li><strong>Layered Ambient Lighting:</strong> Utilizing warm cove LEDs, directional spots, and architectural fixtures.</li>
              <li><strong>Material Harmony:</strong> Pairing cold surfaces like statuario marble with warm natural walnut wood.</li>
            </ul>
            <p>
              Whether updating a residential suite or planning a commercial workspace, focusing on cohesive texture palettes and tailored craftsmanship brings lasting elegance to any interior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
