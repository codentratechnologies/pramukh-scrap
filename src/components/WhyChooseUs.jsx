import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const points = [
    "High Quality Recycled Granules",
    "Timely Delivery",
    "Modern Processing Facility",
    "Reliable Business Partner",
    "Competitive Pricing",
    "Environment Friendly Recycling",
    "Customer Satisfaction"
  ];

  const stats = [
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
          <circle cx="12" cy="12" r="6"/>
          <path d="M12 9a3 3 0 0 0-3 3"/>
        </svg>
      ), 
      number: "1000+", 
      label: "Happy Customers" 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
          <path d="M12 2v12 M9 11l3 3 3-3" />
        </svg>
      ), 
      number: "5000+", 
      label: "Tons Recycled Monthly" 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          <path d="M2 12h20"/>
        </svg>
      ), 
      number: "10+", 
      label: "Years of Experience" 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ), 
      number: "100%", 
      label: "Commitment to Quality" 
    }
  ];

  return (
    <section id="why-us" className="why-choose-us">
      <div className="container">
        <div className="wcu-banner">
          
          <div className="wcu-content">
            <span className="wcu-subtitle">WHY CHOOSE US?</span>
            <h2 className="wcu-title">
              Your Trusted Partner<br/>
              in <span>Plastic Recycling</span>
            </h2>
            
            <ul className="wcu-points">
              {points.map((point, index) => (
                <li key={index}>
                  <div className="check-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="wcu-image-wrapper">
            <img src="/hero-image2.png" alt="Plastic Granules" className="wcu-bg-image" />
          </div>

          <div className="wcu-stats-card">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-info">
                    <h4>{stat.number}</h4>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
