import React, { useState } from 'react';
import { ArrowRight, Maximize2, Filter } from 'lucide-react';
import './Projects.css';

export default function Projects({ onOpenLightbox, onViewAllProjects }) {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const projectsList = [
    { id: 1, title: 'Luxury Modern Living Room', category: 'Residential', img: '/images/project_1.png' },
    { id: 2, title: 'Master Bedroom Suite', category: 'Residential', img: '/images/project_2.png' },
    { id: 3, title: 'Grand Dining Hall', category: 'Dining', img: '/images/project_3.png' },
    { id: 4, title: 'Contemporary Lounge', category: 'Commercial', img: '/images/project_4.png' },
    { id: 5, title: 'Sleek Marble Kitchen', category: 'Residential', img: '/images/project_5.png' },
    { id: 6, title: 'Formal Round Dining Room', category: 'Dining', img: '/images/project_6.png' },
    { id: 7, title: 'High Ceiling Residence', category: 'Residential', img: '/images/service_residential.png' },
    { id: 8, title: 'Bespoke Bedroom Interior', category: 'Residential', img: '/images/service_custom.png' }
  ];

  const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'DINING'];

  const filteredProjects = activeCategory === 'ALL'
    ? projectsList
    : projectsList.filter(p => p.category.toUpperCase() === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Left Title Sidebar */}
        <div className="projects-sidebar">
          <div>
            <div className="section-tag">
              <span>OUR PROJECTS</span>
            </div>
            <h2 className="section-title-light">
              A Glimpse of<br />Our Work
            </h2>
            <p className="projects-subtext">
              Explore our portfolio of tailored luxury spaces created with precision and passion.
            </p>

            {/* Filter Buttons in React State */}
            <div className="projects-filter-bar">
              <span className="filter-label"><Filter size={13} /> Filter:</span>
              <div className="filter-pills">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="projects-cta-wrap">
            <button className="btn-outline-dark" onClick={onViewAllProjects}>
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Right Gallery Grid */}
        <div className="projects-grid">
          {filteredProjects.map((item) => (
            <div 
              key={item.id} 
              className="project-card"
              onClick={() => onOpenLightbox(item, filteredProjects)}
            >
              <img src={item.img} alt={item.title} className="project-img" />
              <div className="project-hover-overlay">
                <div className="project-hover-content">
                  <span className="project-category">{item.category}</span>
                  <h4 className="project-item-title">{item.title}</h4>
                  <div className="zoom-btn">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
