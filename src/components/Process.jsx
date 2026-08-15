import React, { useState } from 'react';
import { Search, Lightbulb, Compass, Wrench, CheckCircle } from 'lucide-react';
import './Process.css';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'CONSULTATION',
      desc: 'We listen to your ideas, space requirements, budget and aesthetic vision during an in-depth creative session.',
      icon: <Search size={20} />,
      detail: 'Our senior designers assess architectural blueprints, lighting orientation, and functional lifestyle needs to establish project milestones.'
    },
    {
      num: '02',
      title: 'CONCEPT',
      desc: 'Our design team creates bespoke mood boards, material palettes and spatial schemes.',
      icon: <Lightbulb size={20} />,
      detail: 'We formulate color schemes, fabric textures, marble samples, and custom lighting arrangements tailored to your style.'
    },
    {
      num: '03',
      title: 'DESIGN',
      desc: 'Detailed 3D photorealistic visualizations, floor plans, and technical specs.',
      icon: <Compass size={20} />,
      detail: 'Experience your space in 3D before construction begins, allowing precise adjustments to millwork, lighting, and layout.'
    },
    {
      num: '04',
      title: 'EXECUTION',
      desc: 'We bring the design to life with master craftsmen and site supervision.',
      icon: <Wrench size={20} />,
      detail: 'Our project managers handle procurement, custom fabrication, quality controls, and site execution seamlessly.'
    },
    {
      num: '05',
      title: 'DELIVERY',
      desc: 'On-time delivery, white-glove installation with perfect finishing touches.',
      icon: <CheckCircle size={20} />,
      detail: 'Final walkthrough, white-glove furniture staging, decor placement, and full client satisfaction handover.'
    }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        {/* Header */}
        <div className="process-header">
          <div className="section-tag">
            <span>OUR PROCESS</span>
          </div>
          <h2 className="section-title-light">From Concept to Creation</h2>
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

                <span className="process-step-num">{step.num}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Active Step Detail Preview Card */}
          <div className="step-detail-card">
            <div className="step-detail-header">
              <span className="step-detail-tag">STAGE {steps[activeStep].num} DETAILS</span>
              <h4 className="step-detail-title">{steps[activeStep].title} PHASE</h4>
            </div>
            <p className="step-detail-text">{steps[activeStep].detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
