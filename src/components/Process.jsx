import React, { useState } from 'react';
import { Search, Lightbulb, Compass, Wrench, CheckCircle } from 'lucide-react';
import './Process.css';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      stage: 'DISCOVER',
      title: 'Tell Us Your Vision',
      desc: 'We understand your requirements, lifestyle, preferences and budget.',
      icon: <Search size={20} />
    },
    {
      num: '02',
      stage: 'DESIGN',
      title: 'Shape the Concept',
      desc: 'Our designers develop layouts, concepts, materials and visualisations for your space.',
      icon: <Lightbulb size={20} />
    },
    {
      num: '03',
      stage: 'REFINE',
      title: 'Perfect Every Detail',
      desc: 'Review the design, choose finishes and refine the details until everything feels right.',
      icon: <Compass size={20} />
    },
    {
      num: '04',
      stage: 'EXECUTE',
      title: 'Bring It to Life',
      desc: 'Our execution team manages manufacturing, installation and on-site coordination.',
      icon: <Wrench size={20} />
    },
    {
      num: '05',
      stage: 'DELIVER',
      title: 'Step Into Your New Space',
      desc: 'After final quality checks, your completed space is ready for you to experience.',
      icon: <CheckCircle size={20} />
    }
  ];

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

        {/* 5-Step Timeline Cards */}
        <div className="process-timeline">
          <div className="timeline-connector-line"></div>
          
          <div className="process-steps-grid">
            {steps.map((step, idx) => (
              <div 
                key={step.num} 
                className={`process-step-item ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
              >
                <div className="node-circle-outer">
                  <div className="node-circle-inner">
                    {step.icon}
                  </div>
                </div>

                <div className="step-num-pill">{step.num}</div>
                <span className="process-stage-badge">{step.stage}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
