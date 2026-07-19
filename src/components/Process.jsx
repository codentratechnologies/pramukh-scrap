import React from 'react';
import './Process.css';

const Process = () => {
  const steps = [
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="truck-body" d="M32 20h6l4 6v8h-6 M32 20v14 M6 34h4M18 34h12M42 34h2 M6 14h26v20H6z" />
          <circle className="truck-wheel" cx="14" cy="34" r="4" stroke="var(--primary-green)" />
          <circle className="truck-wheel" cx="38" cy="34" r="4" stroke="var(--primary-green)" />
          <path d="M32 24h6l2 3h-8z" />
          <path className="anim-float" d="M12 24a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="var(--primary-green)" />
          <path className="anim-float" d="M12 20l2 2-2 2" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Plastic Scrap Collection" 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="14" r="4" />
          <path d="M24 18v6 M14 24h20 M14 24v4 M34 24v4" />
          <rect x="10" y="28" width="8" height="10" rx="1" />
          <circle cx="14" cy="33" r="1.5" />
          <rect x="30" y="28" width="8" height="10" rx="1" />
          <circle cx="34" cy="33" r="1.5" />
          {/* Floating items colored green */}
          <g className="anim-float" stroke="var(--primary-green)">
            <circle cx="24" cy="6" r="2" />
            <rect x="16" y="8" width="4" height="4" rx="1" />
            <polygon points="32,12 34,8 36,12" />
          </g>
        </svg>
      ), 
      label: "Sorting & Segregation" 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <g className="anim-spin" style={{ transformOrigin: 'center' }}>
            <circle cx="24" cy="24" r="14" />
            <path d="M24 6v-4 M24 46v-4 M6 24H2 M46 24h-4" />
            <path d="M11.27 11.27l-2.83-2.83 M39.56 39.56l-2.83-2.83" />
            <path d="M11.27 36.73l-2.83 2.83 M39.56 8.44l-2.83 2.83" />
            <g stroke="var(--primary-green)">
              <path d="M20 20h8v4 M28 24l-3 3 3 3 M28 28h-8v-4 M20 24l-3-3 3-3" />
            </g>
          </g>
        </svg>
      ), 
      label: "Grinding" 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="anim-drop" d="M24 6C24 6 10 22 10 32a14 14 0 1 0 28 0c0-10-14-26-14-26z"/>
          <path d="M16 32a8 8 0 0 1 5-7.5" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Cleaning & Washing" 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6h24l-6 14H18z M20 20v12 M28 20v12" />
          <rect x="14" y="20" width="20" height="12" rx="2" />
          <g className="anim-fall" fill="var(--primary-green)" stroke="none">
            <circle cx="20" cy="38" r="2" />
            <circle cx="28" cy="38" r="2" />
            <circle cx="24" cy="42" r="2" />
            <circle cx="16" cy="44" r="2" />
            <circle cx="32" cy="44" r="2" />
          </g>
        </svg>
      ), 
      label: "Extrusion & Granule Manufacturing" 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 4h12a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          <path d="M22 4v4h4V4 M22 18h8 M22 26h8 M22 34h8" />
          <g className="anim-check" stroke="var(--primary-green)">
            <path d="M16 18l3 3 M16 26l3 3 M16 34l3 3" />
          </g>
        </svg>
      ), 
      label: "Quality Inspection" 
    },
    { 
      icon: (
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="anim-bounce" d="M24 6L6 15l18 9 18-9-18-9z M6 15v18l18 9 18-9V15 M24 24v18" />
          <path className="anim-bounce" d="M12 26l8 4v-4l-8-4z" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Packing & Dispatch" 
    }
  ];

  return (
    <section id="process" className="process">
      <div className="container text-center">
        <span className="section-subtitle">OUR PROCESS</span>
        <h2 className="section-title">
          From Waste to <span>Worth</span>
        </h2>
        <div className="process-separator"></div>
        
        <div className="process-timeline">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="process-step">
                <div className="process-icon">{step.icon}</div>
                <p className="process-label">{step.label}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="process-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 6L20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
