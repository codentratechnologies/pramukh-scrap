import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        
        <div className="about-image-wrapper">
          <img src="/hero-image1.png" alt="Processing Facility View" className="about-image" />
        </div>

        <div className="about-content">
          <span className="section-subtitle">WHO WE ARE</span>
          <h2 className="section-title">
            Committed to Quality.<br/>
            Focused on <span>Sustainability.</span>
          </h2>
          <p className="about-description">
            We collect, process and recycle plastic scrap into high-quality 
            recycled polymer granules for a cleaner tomorrow.
          </p>

          <div className="about-features">
            <div className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <p>Advanced<br/>Technology</p>
            </div>
            <div className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"/>
                  <path d="M8 2v20"/>
                  <path d="M16 2v20"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <p>Modern<br/>Infrastructure</p>
            </div>
            <div className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c4.97-4.97 9-9.5 9-13.5 0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.03 4.03 8.53 9 13.5z"/>
                  <circle cx="12" cy="8.5" r="3"/>
                </svg>
              </div>
              <p>Environment<br/>Friendly</p>
            </div>
            <div className="about-feature-item">
              <div className="about-feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>Customer<br/>Satisfaction</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
