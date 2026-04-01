import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { Education as EduData } from '../data/constants';
import styles from './Experience.module.css'; // Reusing timeline styles from Experience

const Education = () => {
  const [selectedEdu, setSelectedEdu] = useState(null);

  const truncateWords = (text, maxWords) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedEdu(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      
      <div className={styles.timeline}>
        {EduData.map((edu) => (
          <div key={edu.id} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div 
              className={`${styles.timelineContent} ${styles.clickableCard}`}
              onClick={() => setSelectedEdu(edu)}
            >
              <div className={styles.headerWithLogo}>
                {edu.logo && <img src={edu.logo} alt={edu.institution} className={styles.orgLogo} />}
                <div className={styles.headerDetails}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.role}>{edu.degree}</h3>
                    <span className={styles.duration}>{edu.duration}</span>
                  </div>
                  <h4 className={styles.company}>{edu.institution}</h4>
                </div>
              </div>
              <p className={styles.description}>{truncateWords(edu.description, 30)}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedEdu && (
        <div className={styles.modalOverlay} onClick={() => setSelectedEdu(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedEdu(null)}>
              <FiX size={24} />
            </button>
            <div className={styles.modalBody}>
              <div className={styles.headerWithLogo}>
                {selectedEdu.logo && <img src={selectedEdu.logo} alt={selectedEdu.institution} className={styles.orgLogo} />}
                <div className={styles.headerDetails}>
                  <h3 className={styles.modalTitle}>{selectedEdu.degree}</h3>
                  <h4 className={styles.company}>{selectedEdu.institution}</h4>
                  <span className={styles.duration}>{selectedEdu.duration}</span>
                </div>
              </div>
              <p className={styles.modalDescription}>{selectedEdu.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
