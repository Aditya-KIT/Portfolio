import React, { useState, useEffect } from 'react';
import { FiDownload, FiEye, FiX } from 'react-icons/fi';
import { ResumesData } from '../data/constants';
import styles from './Resume.module.css';

const Resume = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  
  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedResume(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!ResumesData || ResumesData.length === 0) {
    return null;
  }

  const resume = ResumesData[0];

  return (
    <section id="resumes" className="section-container">
      <h2 className="section-title">Resume</h2>
      
      <div className={styles.projectCard} onClick={() => setSelectedResume(resume)}>
        <div className={styles.imageContainer}>
          <img src={resume.image} alt={resume.title} className={styles.projectImage} />
          <div className={styles.overlay}>
            <button className={styles.iconLink} aria-label="View Resume" onClick={(e) => { e.stopPropagation(); setSelectedResume(resume); }}>
              <FiEye size={24} />
            </button>
            <a href={resume.downloadLink} download className={styles.iconLink} aria-label="Download Resume" onClick={(e) => e.stopPropagation()}>
              <FiDownload size={24} />
            </a>
          </div>
        </div>
        
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{resume.title}</h3>
          
          <p className={styles.projectDescription}>{resume.description}</p>
          
          <a href={resume.downloadLink} download className={styles.downloadLink} onClick={(e) => e.stopPropagation()}>
            <FiDownload size={20} /> Download
          </a>
        </div>
      </div>

      {/* Resume Modal */}
      {selectedResume && (
        <div className={styles.modalOverlay} onClick={() => setSelectedResume(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedResume(null)}>
              <FiX size={24} />
            </button>
            
            <div className={styles.modalImageContainer}>
              <img src={selectedResume.image} alt={selectedResume.title} className={styles.modalImage} />
            </div>
            
            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selectedResume.title}</h3>
              <div className={styles.modalDescription}>
                {selectedResume.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                ))}
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                 <a href={selectedResume.downloadLink} download className={styles.downloadLink}>
                    <FiDownload size={20} /> Download PDF
                 </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
