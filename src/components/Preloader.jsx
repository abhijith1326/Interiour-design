import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import './Preloader.css';

const LOADING_DURATION = 15000; // 15 seconds

const STATUS_MESSAGES = [
  "Initializing bespoke architectural workspace...",
  "Curating premium textures, marbles & fine woods...",
  "Rendering 3D spatial illumination & lighting...",
  "Polishing luxury interior craftsmanship details...",
  "Welcome to INTRIA Interior Design..."
];

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const startTimeRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const updateProgress = (now) => {
      const elapsed = now - startTimeRef.current;
      const currentProgress = Math.min(100, (elapsed / LOADING_DURATION) * 100);
      
      setProgress(currentProgress);

      // Update status message based on current progress fraction
      const msgIndex = Math.min(
        STATUS_MESSAGES.length - 1,
        Math.floor((elapsed / LOADING_DURATION) * STATUS_MESSAGES.length)
      );
      setStatusIndex(msgIndex);

      if (elapsed < LOADING_DURATION) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        handleComplete();
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 700); // match CSS fade-out duration
  };

  const handleSkip = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setProgress(100);
    handleComplete();
  };

  const secondsRemaining = Math.max(0, Math.ceil((LOADING_DURATION * (1 - progress / 100)) / 1000));

  return (
    <div className={`preloader-overlay ${isExiting ? 'preloader-exiting' : ''}`}>
      {/* Dynamic Background Architectural Lines */}
      <div className="preloader-bg-grid">
        <div className="grid-line line-v-1"></div>
        <div className="grid-line line-v-2"></div>
        <div className="grid-line line-h-1"></div>
        <div className="grid-line line-h-2"></div>
        <div className="ambient-glow"></div>
      </div>

      <div className="preloader-content">
        {/* Brand Icon & Logo */}
        <div className="preloader-brand">
          <div className="brand-logo-ring">
            <div className="ring-pulse"></div>
            <div className="logo-icon-wrap">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
              </svg>
            </div>
          </div>

          <h1 className="preloader-title">INTRIA</h1>
          <p className="preloader-subtitle">LUXURY ARCHITECTURAL INTERIORS</p>
        </div>

        {/* Dynamic Progress & Percentage */}
        <div className="preloader-progress-section">
          <div className="preloader-stats">
            <span className="preloader-counter">{Math.round(progress)}%</span>
            <span className="preloader-timer">
              <Compass size={14} className="timer-icon" />
              {secondsRemaining}s remaining
            </span>
          </div>

          <div className="preloader-track">
            <div 
              className="preloader-fill" 
              style={{ width: `${progress}%` }}
            >
              <div className="fill-glow"></div>
            </div>
          </div>

          {/* Dynamic Animated Status Subtext */}
          <div className="preloader-status-wrapper">
            <p className="preloader-status-text" key={statusIndex}>
              {STATUS_MESSAGES[statusIndex]}
            </p>
          </div>
        </div>

        {/* Skip Intro Action */}
        <button className="preloader-skip-btn" onClick={handleSkip} aria-label="Skip loading intro">
          <span>SKIP INTRO</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
