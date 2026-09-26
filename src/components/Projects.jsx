import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Projects.css';

export default function Projects({ onOpenLightbox, onViewAllProjects }) {
  const projectsList = [
    {
      id: 1,
      name: 'Corporate Legal Hub',
      type: 'Commercial Interior',
      style: 'Contemporary',
      category: 'COMMERCIAL',
      img: '/images/project_1.jpeg'
    },
    {
      id: 2,
      name: 'Bespoke Luxury Villa',
      type: 'Living Space',
      style: 'Modern Luxury',
      category: 'LIVING',
      img: '/images/project_2.jpeg'
    },
    {
      id: 3,
      name: 'Contemporary TV Lounge',
      type: 'Media & Living Space',
      style: 'Contemporary Minimalist',
      category: 'LIVING',
      img: '/images/project_3.jpeg'
    },
    {
      id: 4,
      name: 'Boutique Reception Hub',
      type: 'Commercial Reception',
      style: 'Warm Elegant',
      category: 'COMMERCIAL',
      img: '/images/project_4.jpeg'
    },
    {
      id: 5,
      name: 'Luxury Spa Wash Suite',
      type: 'Wellness Interior',
      style: 'Modern Architectural',
      category: 'COMMERCIAL',
      img: '/images/project_5.jpeg'
    },
    {
      id: 6,
      name: 'Elite Salon Studio',
      type: 'Salon Interior',
      style: 'Timeless Contemporary',
      category: 'COMMERCIAL',
      img: '/images/project_6.jpeg'
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
