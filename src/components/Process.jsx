import React, { useState, useEffect } from 'react';
import { Search, Lightbulb, Compass, Wrench, CheckCircle } from 'lucide-react';
import './Process.css';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      num: '01',
      stage: 'DISCOVER',
      title: 'Tell Us Your Vision',
      desc: 'We understand your requirements, lifestyle, preferences and budget.',
      detail: 'Our journey begins with an in-depth discovery session where we map your spatial needs, lifestyle preferences, timeline, and budget parameters.',
      icon: <Search size={22} />
    },
    {
      num: '02',
      stage: 'DESIGN',
      title: 'Shape the Concept',
      desc: 'Our designers develop layouts, concepts, materials and visualisations.',
      detail: 'We translate your vision into precise 2D floor plans, 3D photorealistic renders, material palettes, and lighting layouts.',
      icon: <Lightbulb size={22} />
    },
    {
      num: '03',
      stage: 'REFINE',
      title: 'Perfect Every Detail',
      desc: 'Review the design, choose finishes and refine the details until right.',
      detail: 'You review customized material swatches, hardware options, and custom carpentry drawings until every detail matches your expectation.',
      icon: <Compass size={22} />
    },
    {
      num: '04',
      stage: 'EXECUTE',
      title: 'Bring It to Life',
      desc: 'Our execution team manages manufacturing, installation and coordination.',
      detail: 'Factory-precision modular manufacturing combined with expert site management ensures zero delays and flawless craftsmanship.',
      icon: <Wrench size={22} />
    },
    {
      num: '05',
      stage: 'DELIVER',
      title: 'Step Into Your Space',
      desc: 'After final quality checks, your completed space is ready to experience.',
      detail: 'Deep cleaning, white-glove setup, and formal walkthrough with 10-year warranty documentation handover.',
      icon: <CheckCircle size={22} />
    }
  ];

  // Auto-advance timeline animation every 3.5s
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, steps.length]);

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        {/* Header */}
        <div className="process-header">
          <div className="section-tag">
            <span>DESIGN PROCESS</span>
          </div>
          <h2 className="section-title-light">From Vision to Reality</h2>
          <p className="process-subheading">
            A simple, transparent process designed to make your interior journey effortless.
          </p>
        </div>

        {/* 5-Step Timeline Cards with Animation */}
        <div 
          className="process-timeline"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Animated Timeline Progress Bar */}
          <div className="timeline-connector-track">
            <div 
              className="timeline-progress-fill" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
          
          <div className="process-steps-grid">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx <= activeStep;
              return (
                <div 
                  key={step.num} 
                  className={`process-step-item ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsAutoPlaying(false);
                  }}
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setIsAutoPlaying(false);
                  }}
                >
                  <div className="node-circle-outer">
                    <div className="node-circle-inner">
                      {step.icon}
                    </div>
                    {isActive && <div className="node-pulse-ring"></div>}
                  </div>

                  <div className="step-num-pill">{step.num}</div>
                  <span className="process-stage-badge">{step.stage}</span>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Active Step Detailed Card Showcase */}
          <div className="process-detail-card" key={activeStep}>
            <div className="detail-card-left">
              <span className="detail-step-badge">STEP {steps[activeStep].num} — {steps[activeStep].stage}</span>
              <h3 className="detail-step-title">{steps[activeStep].title}</h3>
              <p className="detail-step-text">{steps[activeStep].detail}</p>
            </div>
            <div className="detail-card-right">
              <div className="detail-icon-glow">
                {steps[activeStep].icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
