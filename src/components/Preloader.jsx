import React, { useState, useEffect } from 'react';
import './Preloader.css';

const STATUS_MESSAGES = [
  "Initializing Space Design...",
  "Curating interior aesthetics...",
  "Polishing bespoke craftsmanship details...",
  "Welcome to Space Design..."
];

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2200; // 2.2 seconds loading duration
    const intervalTime = 25;
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        
        const msgIdx = Math.min(
          STATUS_MESSAGES.length - 1,
          Math.floor((next / 100) * STATUS_MESSAGES.length)
        );
        setStatusIndex(msgIdx);

        if (next >= 100) {
          clearInterval(timer);
          handleComplete();
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 600);
  };

  return (
    <div className={`preloader-overlay ${isExiting ? 'preloader-exiting' : ''}`}>
      {/* Background Ambient Glow & Architectural Lines */}
      <div className="preloader-bg-grid">
        <div className="grid-line line-v-1"></div>
        <div className="grid-line line-v-2"></div>
        <div className="grid-line line-h-1"></div>
        <div className="grid-line line-h-2"></div>
        <div className="ambient-glow"></div>
      </div>

      {/* Centered Intro Loading Box */}
      <div className="preloader-clean-box">
        {/* Brand Logo & Name */}
        <div className="preloader-brand-header">
          <div className="preloader-logo-icon">
            <img src="/logo.png" alt="Space Design Logo" className="preloader-logo-img" />
          </div>

          <div className="preloader-brand-title-wrap">
            <h1 className="preloader-brand-name">SPACE DESIGN</h1>
            <span className="preloader-brand-sub">SPACES THAT INSPIRE</span>
          </div>
        </div>

        {/* Loading Progress Bar & Percentage */}
        <div className="preloader-loading-wrap">
          <div className="preloader-track-bar">
            <div 
              className="preloader-fill-bar" 
              style={{ width: `${Math.min(100, Math.round(progress))}%` }}
            ></div>
          </div>

          <div className="preloader-status-row">
            <span className="preloader-status-msg" key={statusIndex}>
              {STATUS_MESSAGES[statusIndex]}
            </span>
            <span className="preloader-percent">
              {Math.min(100, Math.round(progress))}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
