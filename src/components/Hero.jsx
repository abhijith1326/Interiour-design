import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';
import './Hero.css';

const DESKTOP_FRAMES = 143;
const MOBILE_FRAMES = 192;

export default function Hero({ onExplore }) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);
  const [displayedFrame, setDisplayedFrame] = useState(1);
  const [activeStage, setActiveStage] = useState(0);

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  
  const desktopCacheRef = useRef([]);
  const mobileCacheRef = useRef([]);
  
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const rafIdRef = useRef(null);
  const isMobileRef = useRef(isMobile);

  const totalFrames = isMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;

  // Helper to format frame path
  const getFramePath = (frameNum, forMobile) => {
    const padded = String(frameNum).padStart(4, '0');
    const folder = forMobile ? 'transformation-frames-mobile' : 'transformation-frames';
    return `/${folder}/frame-${padded}.jpg`;
  };

  // Draw frame on canvas with edge-to-edge full-bleed cover fit
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const currentIsMobile = isMobileRef.current;
    const cache = currentIsMobile ? mobileCacheRef.current : desktopCacheRef.current;
    const maxFrames = currentIsMobile ? MOBILE_FRAMES : DESKTOP_FRAMES;
    const clampedIndex = Math.min(maxFrames, Math.max(1, frameIndex));

    const targetImg = cache[clampedIndex - 1];

    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement;
    const displayWidth = parent ? parent.clientWidth : window.innerWidth;
    const displayHeight = parent ? parent.clientHeight : window.innerHeight;

    if (canvas.width !== Math.round(displayWidth * dpr) || canvas.height !== Math.round(displayHeight * dpr)) {
      canvas.width = Math.round(displayWidth * dpr);
      canvas.height = Math.round(displayHeight * dpr);
    }

    const canvasW = canvas.width;
    const canvasH = canvas.height;

    // Use loaded image or fallback to frame 1
    const img = (targetImg && targetImg.complete && targetImg.naturalWidth > 0)
      ? targetImg
      : (cache[0] && cache[0].complete && cache[0].naturalWidth > 0)
        ? cache[0]
        : null;

    if (!img) return;

    const imgW = img.naturalWidth || (currentIsMobile ? 1080 : 1920);
    const imgH = img.naturalHeight || (currentIsMobile ? 1920 : 1080);

    // True edge-to-edge full-bleed cover fit
    const scale = Math.max(canvasW / imgW, canvasH / imgH);
    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const drawX = (canvasW - drawW) / 2;
    const drawY = (canvasH - drawH) / 2;

    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  };

  // Preload frame sequences for desktop & mobile
  useEffect(() => {
    // 1. Desktop Cache
    const dCache = new Array(DESKTOP_FRAMES);
    const firstImgD = new Image();
    firstImgD.src = getFramePath(1, false);
    firstImgD.onload = () => {
      if (!isMobileRef.current) drawFrame(1);
    };
    dCache[0] = firstImgD;

    for (let i = 2; i <= DESKTOP_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i, false);
      dCache[i - 1] = img;
    }
    desktopCacheRef.current = dCache;

    // 2. Mobile Cache
    const mCache = new Array(MOBILE_FRAMES);
    const firstImgM = new Image();
    firstImgM.src = getFramePath(1, true);
    firstImgM.onload = () => {
      if (isMobileRef.current) drawFrame(1);
    };
    mCache[0] = firstImgM;

    for (let i = 2; i <= MOBILE_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i, true);
      mCache[i - 1] = img;
    }
    mobileCacheRef.current = mCache;
  }, []);

  // Window resize & view mode detection
  useEffect(() => {
    const handleResize = () => {
      const mobileState = window.innerWidth <= 768;
      if (mobileState !== isMobileRef.current) {
        isMobileRef.current = mobileState;
        setIsMobile(mobileState);
      }
      const currentInt = Math.round(currentFrameRef.current);
      drawFrame(currentInt);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 60FPS Render Loop
  useEffect(() => {
    let lastRenderedInt = -1;

    const renderLoop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.45;
      } else {
        currentFrameRef.current = targetFrameRef.current;
      }

      const maxF = isMobileRef.current ? MOBILE_FRAMES : DESKTOP_FRAMES;
      const frameInt = Math.min(
        maxF,
        Math.max(1, Math.round(currentFrameRef.current))
      );

      if (frameInt !== lastRenderedInt) {
        drawFrame(frameInt);
        setDisplayedFrame(frameInt);
        lastRenderedInt = frameInt;

        // Stage calculation
        const ratio = frameInt / maxF;
        if (ratio < 0.25) setActiveStage(0);
        else if (ratio < 0.50) setActiveStage(1);
        else if (ratio < 0.75) setActiveStage(2);
        else setActiveStage(3);
      }

      rafIdRef.current = requestAnimationFrame(renderLoop);
    };

    rafIdRef.current = requestAnimationFrame(renderLoop);
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Scroll position mapping to targetFrameRef
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      
      if (totalScrollableHeight <= 0) return;

      const scrolledAmount = -rect.top;
      let progress = scrolledAmount / totalScrollableHeight;
      progress = Math.max(0, Math.min(1, progress));

      const maxF = isMobileRef.current ? MOBILE_FRAMES : DESKTOP_FRAMES;
      const target = Math.min(
        maxF,
        Math.max(1, Math.floor(progress * (maxF - 1)) + 1)
      );

      targetFrameRef.current = target;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stagesContent = [
    {
      stageNum: '01',
      tag: 'STAGE 01 • RAW ARCHITECTURAL CANVAS',
      title: 'THE EMPTY CANVAS',
      desc: 'Every luxury interior begins with an untouched architectural space full of potential.',
    },
    {
      stageNum: '02',
      tag: 'STAGE 02 • STRUCTURE & MILLWORK',
      title: 'BESPOKE CRAFTSMANSHIP',
      desc: 'Installing custom marble accent walls, architectural shelving, and warm hardwood flooring.',
    },
    {
      stageNum: '03',
      tag: 'STAGE 03 • FURNISHING & LIGHTING',
      title: 'CURATED ELEGANCE',
      desc: 'Integrating plush sectional seating, statement coffee tables, and layered ambient lighting.',
    },
    {
      stageNum: '04',
      tag: 'STAGE 04 • COMPLETED LUXURY RESIDENCE',
      title: 'SPACES THAT INSPIRE',
      desc: 'A completed timeless living sanctuary engineered with precision and tailored to perfection.',
    }
  ];

  const currentContent = stagesContent[activeStage];

  const scrollToStage = (stageIdx) => {
    if (!sectionRef.current) return;
    const targetProgress = stageIdx / (stagesContent.length - 1);
    
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalScrollableHeight = rect.height - window.innerHeight;
    const targetScrollY = sectionTop + targetProgress * totalScrollableHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="home" 
      className="hero-scrollytelling-section"
      ref={sectionRef}
    >
      {/* Sticky Frame Container */}
      <div className="hero-sticky-wrapper">
        {/* Hardware-Accelerated Edge-to-Edge Canvas Layer */}
        <div className="hero-bg-layer">
          <canvas ref={canvasRef} className="hero-canvas" />
          <div className="hero-overlay-crisp"></div>
        </div>

        {/* Dynamic Animated Content Overlay */}
        <div className="hero-container">
          <div key={activeStage} className="hero-content animated-content-swap">
            <div className="hero-tag-badge">
              <Sparkles size={14} className="gold-sparkle-icon" />
              <span className="hero-tag-text">{currentContent.tag}</span>
            </div>

            <h1 className="hero-title">{currentContent.title}</h1>
            
            <p className="hero-description">{currentContent.desc}</p>

            <div className="hero-cta-wrap">
              <a href="#projects" className="btn-gold-filled" onClick={onExplore}>
                <span>EXPLORE PROJECTS</span>
                <ArrowRight size={16} />
              </a>

              <button 
                className="btn-stage-jump"
                onClick={() => scrollToStage((activeStage + 1) % stagesContent.length)}
              >
                <Layers size={15} />
                <span>NEXT STAGE ({currentContent.stageNum}/04)</span>
              </button>
            </div>
          </div>

          {/* Bottom Scroll Progress Bar & Stage Indicators */}
          <div className="hero-scroll-dashboard">
            <div className="scroll-indicator-wrap">
              <span className="scroll-hint-text">SCROLL TO TRANSFORM ROOM</span>
              <div className="scroll-progress-bar-track">
                <div 
                  className="scroll-progress-bar-fill"
                  style={{ width: `${(displayedFrame / totalFrames) * 100}%` }}
                ></div>
              </div>
              <span className="scroll-frame-count">FRAME {displayedFrame} / {totalFrames}</span>
            </div>

            {/* Stage Quick Navigation Buttons */}
            <div className="stage-nav-pills">
              {stagesContent.map((st, idx) => (
                <button
                  key={idx}
                  className={`stage-pill-btn ${activeStage === idx ? 'active' : ''}`}
                  onClick={() => scrollToStage(idx)}
                >
                  <span className="pill-num">{st.stageNum}</span>
                  <span className="pill-label">{st.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Social Icons Bar */}
          <div className="hero-social-bar">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 0 0-3.16 19.49c-.09-.82-.17-2.08.03-2.98l1.2-5.11s-.3-.61-.3-1.5c0-1.4.82-2.45 1.83-2.45.86 0 1.28.65 1.28 1.43 0 .87-.55 2.18-.84 3.39-.24 1.02.51 1.85 1.52 1.85 1.83 0 3.24-1.93 3.24-4.71 0-2.46-1.77-4.18-4.3-4.18-2.93 0-4.65 2.2-4.65 4.47 0 .88.34 1.83.77 2.35.08.1.1.19.07.31l-.29 1.18c-.04.18-.15.22-.35.13-1.31-.61-2.13-2.53-2.13-4.07 0-3.32 2.41-6.37 6.96-6.37 3.65 0 6.5 2.6 6.5 6.08 0 3.63-2.29 6.55-5.47 6.55-1.07 0-2.07-.56-2.42-1.21l-.66 2.51c-.24.92-.88 2.07-1.31 2.76A10 10 0 1 0 12 2z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
