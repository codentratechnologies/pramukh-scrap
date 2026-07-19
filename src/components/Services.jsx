import React from 'react';
import './Services.css';

const Services = () => {
  const servicesList = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Truck cab and chassis */}
          <path d="M32 20h6l4 6v8h-6" />
          <path d="M32 20v14" />
          <path d="M6 34h4M18 34h12M42 34h2" />
          {/* Box on the back */}
          <path d="M6 14h26v20H6z" />
          {/* Wheels */}
          <circle cx="14" cy="34" r="4" />
          <circle cx="38" cy="34" r="4" />
          {/* Window */}
          <path d="M32 24h6l2 3h-8z" />
          {/* Scrap icons inside the box */}
          <circle cx="12" cy="20" r="2" />
          <path d="M18 18h4v4h-4z" />
          <path d="M26 22l-2-4-2 4z" />
          <path d="M16 28h6" />
        </svg>
      ),
      title: "Plastic Scrap Procurement",
      desc: "We collect all types of plastic scrap in bulk quantity."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Open hands / base */}
          <path d="M12 36c4-4 10-2 12 2 2-4 8-6 12-2" />
          <path d="M24 38v6" />
          {/* Floating shapes */}
          <circle cx="14" cy="20" r="4" />
          <rect x="20" y="10" width="8" height="8" rx="1" />
          <polygon points="34,24 38,16 42,24" />
          {/* Small dots/sparkles */}
          <circle cx="14" cy="10" r="1" fill="currentColor" />
          <circle cx="24" cy="24" r="1" fill="currentColor" />
          <circle cx="36" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
      title: "Sorting & Segregation",
      desc: "Advanced sorting ensures high quality output."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Gear body */}
          <circle cx="24" cy="24" r="14" />
          <path d="M24 6v-4" /><path d="M24 46v-4" />
          <path d="M6 24H2" /><path d="M46 24h-4" />
          <path d="M11.27 11.27l-2.83-2.83" /><path d="M39.56 39.56l-2.83-2.83" />
          <path d="M11.27 36.73l-2.83 2.83" /><path d="M39.56 8.44l-2.83 2.83" />
          {/* Recycle arrows inside */}
          <path d="M20 20h8v4" />
          <path d="M28 24l-3 3 3 3" />
          <path d="M28 28h-8v-4" />
          <path d="M20 24l-3-3 3-3" />
        </svg>
      ),
      title: "Grinding",
      desc: "Scrap is ground into uniform flakes for further processing."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Water Drop */}
          <path d="M24 6C24 6 10 22 10 32a14 14 0 1 0 28 0c0-10-14-26-14-26z"/>
          {/* Highlight */}
          <path d="M16 32a8 8 0 0 1 5-7.5" />
        </svg>
      ),
      title: "Washing",
      desc: "Cleaning process removes impurities (where required)."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Funnel/Hopper */}
          <path d="M12 6h24l-6 14H18z" />
          {/* Extruder Body */}
          <rect x="14" y="20" width="20" height="12" rx="2" />
          <path d="M20 20v12" />
          <path d="M28 20v12" />
          {/* Granules falling out */}
          <circle cx="20" cy="38" r="1.5" fill="currentColor" />
          <circle cx="28" cy="38" r="1.5" fill="currentColor" />
          <circle cx="24" cy="42" r="1.5" fill="currentColor" />
          <circle cx="16" cy="44" r="1.5" fill="currentColor" />
          <circle cx="32" cy="44" r="1.5" fill="currentColor" />
        </svg>
      ),
      title: "Granules Manufacturing",
      desc: "Extrusion process turns flakes into premium granules."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Isometric Box */}
          <path d="M24 6L6 15l18 9 18-9-18-9z" />
          <path d="M6 15v18l18 9 18-9V15" />
          <path d="M24 24v18" />
          {/* Subtle marking on front face */}
          <path d="M12 26l8 4v-4l-8-4z" />
        </svg>
      ),
      title: "Bulk Supply",
      desc: "Reliable bulk supply of recycled polymer granules."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">OUR SERVICES</span>
          <h2 className="section-title">
            Comprehensive Recycling <span>Solutions</span>
          </h2>
          <div className="services-separator"></div>
        </div>

        <div className="services-grid">
          {servicesList.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
