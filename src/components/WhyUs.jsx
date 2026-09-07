import React, { useState } from 'react';
import { Palette, Layout, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import './WhyUs.css';

export default function WhyUs() {
  const [activeBoxIndex, setActiveBoxIndex] = useState(0);

  const features = [
    {
      num: '01',
      title: 'Personalised Design',
      desc: 'Every project begins with understanding your lifestyle, preferences and vision.',
      icon: <Palette size={22} />
    },
    {
      num: '02',
      title: 'Thoughtful Planning',
      desc: 'We maximise every square foot through intelligent layouts, storage and space planning.',
      icon: <Layout size={22} />
    },
    {
      num: '03',
      title: 'Quality Materials',
      desc: 'We carefully select materials, finishes and hardware to deliver lasting quality.',
      icon: <ShieldCheck size={22} />
    },
    {
      num: '04',
      title: 'End-to-End Execution',
      desc: 'From design development to installation, we coordinate the entire journey.',
      icon: <Layers size={22} />
    },
    {
      num: '05',
      title: 'Attention to Detail',
      desc: 'From the smallest hardware to the final finish, every detail matters to us.',
      icon: <Sparkles size={22} />
    }
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="why-us-container">
        {/* Section Header */}
        <div className="why-us-header">
          <div className="section-tag">
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="section-title-light">Why Choose Space Design?</h2>
          <p className="why-us-subheading">
            Because your space deserves more than a standard solution.
          </p>
        </div>

        {/* 5 Feature Boxes Grid */}
        <div className="why-us-grid">
          {features.map((item, idx) => (
            <div 
              key={item.num}
              className={`why-us-card ${activeBoxIndex === idx ? 'active' : ''}`}
              onMouseEnter={() => setActiveBoxIndex(idx)}
              onClick={() => setActiveBoxIndex(idx)}
            >
              <div className="why-us-card-top">
                <span className="why-us-num">{item.num}</span>
                <div className="why-us-icon-box">
                  {item.icon}
                </div>
              </div>

              <h3 className="why-us-card-title">{item.title}</h3>
              <p className="why-us-card-desc">{item.desc}</p>
              
              <div className="why-us-card-border-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
