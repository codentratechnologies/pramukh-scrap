import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
    setStatus(''); // Clear previous status
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setStatus('Sending...');
      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            service_id: "service_6j8klbc",
            template_id: "template_umy2w4i",
            user_id: "juBV8F5-0B564Z4Ay", // We need this!
            template_params: {
                name: formData.name,
                email: formData.email,
                subject: formData.subject || "Not provided",
                message: formData.message,
            }
        })
      })
      .then(response => {
        if (response.ok) {
          setStatus('Thank you for reaching out! We will get back to you soon.');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
        } else {
          return response.text().then(text => { throw new Error(text) });
        }
      })
      .catch(error => {
        console.error(error);
        setStatus('Oops! There was a problem submitting your form.');
      });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          
          <div className="contact-info-panel">
            <span className="section-subtitle">GET IN TOUCH</span>
            <h2 className="section-title" style={{color: "var(--white)", marginBottom: "30px"}}>
              Ready to <span style={{color: "var(--primary-green)"}}>Recycle?</span>
            </h2>
            <p className="contact-desc">
              Contact us today for bulk plastic scrap procurement and high-quality recycled polymer supply. We are here to answer any questions you may have.
            </p>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <h5>Call Us</h5>
                  <p>+91 6353153240</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <h5>Email Us</h5>
                  <p>pramukhscrap36@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <h5>Visit Us</h5>
                  <p>Industrial Estate, Phase II, Gujarat</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3 className="form-header">Send us a message</h3>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    className={errors.name ? 'input-error' : ''}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    className={errors.email ? 'input-error' : ''}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject (Optional)" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  className={errors.message ? 'input-error' : ''}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">
                Send Message
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {status && <p className="form-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
