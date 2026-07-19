import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'materials', 'why-us', 'industries', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <img src="/logo.png" alt="Pramukh Scrap" className="logo-img" />
        </div>
        
        <nav className="navbar">
          <ul>
            <li><a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => onUpdateActiveLink('home')}>Home</a></li>
            <li><a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={() => onUpdateActiveLink('about')}>About Us</a></li>
            <li><a href="#services" className={activeLink === 'services' ? 'active' : ''} onClick={() => onUpdateActiveLink('services')}>Our Services</a></li>
            <li><a href="#materials" className={activeLink === 'materials' ? 'active' : ''} onClick={() => onUpdateActiveLink('materials')}>Materials</a></li>
            <li><a href="#why-us" className={activeLink === 'why-us' ? 'active' : ''} onClick={() => onUpdateActiveLink('why-us')}>Why Us</a></li>
            <li><a href="#industries" className={activeLink === 'industries' ? 'active' : ''} onClick={() => onUpdateActiveLink('industries')}>Industries</a></li>
            <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={() => onUpdateActiveLink('contact')}>Contact Us</a></li>
          </ul>
        </nav>
        
        <div className="header-action">
          <a href="#contact" className="btn btn-primary" onClick={() => onUpdateActiveLink('contact')}>
            Get in Touch 
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92V19.92C22.0032 20.1986 21.9441 20.4743 21.8271 20.7264C21.7101 20.9785 21.5383 21.1994 21.325 21.3712C21.1116 21.543 20.8624 21.6607 20.596 21.7153C20.3297 21.7698 20.0531 21.7597 19.79 21.685C16.6433 20.662 13.7547 18.9959 11.36 16.82C9.11718 14.8105 7.30606 12.3842 6.04 9.68001C5.74836 9.07684 5.61718 8.4116 5.654 7.74001V4.74001C5.65406 4.46011 5.76527 4.19167 5.96316 3.99378C6.16105 3.7959 6.42948 3.68469 6.70938 3.68469H9.70938C9.93291 3.68006 10.1518 3.75135 10.3346 3.88856C10.5173 4.02577 10.6546 4.22197 10.7263 4.45001C10.8529 4.96206 10.9327 5.48512 10.9654 6.01251C10.9691 6.1365 10.9419 6.25925 10.8858 6.3705C10.8298 6.48174 10.7465 6.57833 10.6431 6.65251L9.36625 7.92938C10.7816 10.413 12.839 12.4703 15.3225 13.8856L16.5994 12.6088C16.6736 12.5053 16.7701 12.4221 16.8814 12.366C16.9926 12.3099 17.1154 12.2828 17.2394 12.2863C17.7668 12.3189 18.2898 12.3988 18.8019 12.5253C19.0321 12.597 19.2299 12.7358 19.3672 12.9202C19.5044 13.1047 19.5746 13.3251 19.5694 13.55V16.55C19.5694 16.83 19.4582 17.0984 19.2603 17.2963C19.0624 17.4942 18.794 17.6054 18.5141 17.6054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
