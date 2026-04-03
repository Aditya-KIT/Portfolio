import React, { useState } from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { PersonalInfo } from '../data/constants';
import styles from './Contact.module.css';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formsubmit.co/ajax/adityaguptakit@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
        setFormData({ name: '', email: '', countryCode: '+91', phone: '', subject: '', message: '' });
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Oops! Something went wrong. Please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p className={styles.contactDesc}>
            Feel free to reach out to me for any job opportunities, freelance projects, or just to say hi!
          </p>
          
          <div className={styles.infoBlocks}>
            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <FiMail size={24} />
              </div>
              <div>
                <h4>Email</h4>
                <p>{PersonalInfo.email}</p>
              </div>
            </div>
            
            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <FiPhone size={24} />
              </div>
              <div>
                <h4>Phone</h4>
                <p>{PersonalInfo.phone}</p>
              </div>
            </div>
            
            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <FiMapPin size={24} />
              </div>
              <div>
                <h4>Location</h4>
                <p>{PersonalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <div className={styles.phoneInputWrapper}>
              <select 
                name="countryCode" 
                value={formData.countryCode} 
                onChange={handleChange}
                className={styles.countrySelect}
              >
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA/Canada)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+971">+971 (UAE)</option>
                <option value="+65">+65 (Singapore)</option>
              </select>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder="12345 67890"
                required 
                className={styles.phoneInput}
              />
            </div>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Job Opportunity"
              required 
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required 
            ></textarea>
          </div>
          
          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
