import React from 'react';
import { Award, Heart, CheckCircle2, ShieldCheck } from 'lucide-react';
import './StatsSection.css';

export default function StatsSection() {
  const stats = [
    {
      number: '100+',
      label: 'Spaces Designed',
      sub: 'Residences, Kitchens & Offices',
      icon: <Award size={24} />
    },
    {
      number: '50+',
      label: 'Happy Clients',
      sub: 'Homeowners & Commercial Clients',
      icon: <Heart size={24} />
    },
    {
      number: '5+',
      label: 'Years of Design Experience',
      sub: 'Turnkey Architectural Excellence',
      icon: <CheckCircle2 size={24} />
    },
    {
      number: '100%',
      label: 'Commitment to Quality',
      sub: 'End-to-End Material Assurance',
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((item, i) => (
            <div key={i} className="stat-card">
              <div className="stat-card-top">
                <div className="stat-icon-wrap">{item.icon}</div>
                <span className="stat-big-num">{item.number}</span>
              </div>
              <h3 className="stat-label-title">{item.label}</h3>
              <p className="stat-sub-text">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
