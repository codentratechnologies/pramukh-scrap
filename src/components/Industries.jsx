import React from 'react';
import './Industries.css';

const Industries = () => {
  const industriesList = [
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Injection machine */}
          <path className="anim-machine" d="M12 36h24 M16 36v-16 M32 36v-16 M14 20h20 M20 20v-8 M28 20v-8 M18 12h12 M24 12v-4 M20 8h8" />
          <circle cx="24" cy="28" r="4" stroke="var(--primary-green)" />
          <path className="anim-pulse" d="M24 28v-4" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Plastic Injection Moulding" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Blow moulding bottle */}
          <path className="anim-expand" d="M20 12h8 M22 12v-4h4v4 M16 36c0-6 4-8 4-16v-8 M32 36c0-6-4-8-4-16v-8 M16 36h16" />
          <path d="M24 16v14" stroke="var(--primary-green)" className="anim-fill" />
          <path d="M20 22l4 4 4-4" stroke="var(--primary-green)" className="anim-fill" />
        </svg>
      ), 
      label: "Blow Moulding" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Extrusion */}
          <path d="M12 20h24 M12 28h24 M16 20v-8h16v8 M20 28v8 M28 28v8" />
          <path className="anim-flow" d="M24 28v12" stroke="var(--primary-green)" strokeWidth="3" />
          <circle className="anim-flow" cx="24" cy="44" r="2" fill="var(--primary-green)" stroke="none" />
          <path d="M14 24h4 M30 24h4" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Extrusion" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Packaging Box */}
          <path className="anim-box" d="M24 8l-14 7v18l14 7 14-7V15L24 8z" />
          <path className="anim-box" d="M10 15l14 7 14-7 M24 22v21" />
          {/* Recycle symbol on box */}
          <path className="anim-spin-slow" d="M20 28l4-4 4 4 M24 24v8" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Packaging" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Household bottle/house */}
          <path d="M24 8L10 20v18h28V20L24 8z" />
          <path d="M22 8v-4h4v4" />
          <rect className="anim-pulse" x="20" y="22" width="8" height="10" rx="2" stroke="var(--primary-green)" />
          <path d="M16 26h-2 M34 26h-2" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Household Products" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Automotive */}
          <path className="anim-drive" d="M10 24l4-10h20l4 10 M8 24h32v8a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-8z" />
          <circle className="anim-spin" cx="14" cy="36" r="4" />
          <circle className="anim-spin" cx="34" cy="36" r="4" />
          <path className="anim-pulse" d="M14 24h6 M28 24h6" stroke="var(--primary-green)" />
          <path d="M18 14h12v10H18z" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Automotive Components" 
    },
    { 
      icon: (
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Industrial barrel */}
          <path className="anim-shake" d="M12 12h24v28H12z M12 20h24 M12 32h24 M16 12v-4h16v4" />
          <path className="anim-pulse" d="M20 24c0-4 4-6 4-10 0 4 4 6 4 10s-4 6-4 6-4-2-4-6z" stroke="var(--primary-green)" />
        </svg>
      ), 
      label: "Industrial Plastic Products" 
    }
  ];

  return (
    <section id="industries" className="industries">
      <div className="container text-center">
        <span className="section-subtitle">INDUSTRIES WE SERVE</span>
        <h2 className="section-title">
          Powering Multiple <span>Industries</span>
        </h2>
        <div className="industries-separator"></div>
        
        <div className="industries-grid">
          {industriesList.map((item, index) => (
            <div className="industry-item" key={index}>
              <div className="industry-icon-wrapper">
                {item.icon}
              </div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
