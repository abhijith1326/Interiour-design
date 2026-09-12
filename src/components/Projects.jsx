import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Projects.css';

export default function Projects({ onOpenLightbox, onViewAllProjects }) {
  const projectsList = [
    {
      id: 1,
      name: 'Modern Residence — Trivandrum',
      type: 'Residential Interior',
      style: 'Contemporary',
      category: 'RESIDENTIAL',
      img: '/images/project_1.png'
    },
    {
      id: 2,
      name: 'Bespoke Villa — Kochi',
      type: 'Living Space',
      style: 'Modern Luxury',
      category: 'LIVING',
      img: '/images/project_2.png'
    },
    {
      id: 3,
      name: 'Sleek Island Kitchen — Calicut',
      type: 'Modular Kitchen',
      style: 'Contemporary Minimalist',
      category: 'KITCHENS',
      img: '/images/service_custom.png'
    },
    {
      id: 4,
      name: 'Sanctuary Master Suite — Wayanad',
      type: 'Bedroom Interior',
      style: 'Warm Elegant',
      category: 'BEDROOMS',
      img: '/images/project_3.png'
    },
    {
      id: 5,
      name: 'Corporate Design Hub — Trivandrum',
      type: 'Commercial Environment',
      style: 'Modern Architectural',
      category: 'COMMERCIAL',
      img: '/images/service_commercial.png'
    },
    {
      id: 6,
      name: 'Heritage Luxury Residence — Thrissur',
      type: 'Complete Home Interior',
      style: 'Timeless Contemporary',
      category: 'RESIDENTIAL',
      img: '/images/project_4.png'
    }
  ];

  const filteredProjects = projectsList;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <div className="section-tag">
            <span>PORTFOLIO</span>
          </div>
          <h2 className="section-title-dark">Spaces We've Brought to Life</h2>
          <p className="projects-subheading">
            Explore a selection of interiors designed around individuality, functionality and timeless aesthetics.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid-3">
          {filteredProjects.map((item) => (
            <div 
              key={item.id} 
              className="project-card-lux"
              onClick={() => onOpenLightbox && onOpenLightbox(item, filteredProjects)}
            >
              <div className="project-img-frame">
                <img src={item.img} alt={item.name} className="project-img" />
                <span className="project-style-badge">{item.style}</span>
              </div>

              <div className="project-card-details">
                <span className="project-type-tag">{item.type}</span>
                <h3 className="project-name-title">{item.name}</h3>

                <div className="project-btn-wrap">
                  <button 
                    className="project-view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenLightbox) onOpenLightbox(item, filteredProjects);
                    }}
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="projects-footer-cta">
          <button className="btn-outline-gold" onClick={onViewAllProjects}>
            <span>EXPLORE FULL PORTFOLIO</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
