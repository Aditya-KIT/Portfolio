import React, { useState, useEffect } from 'react';
import { FiDownload, FiX } from 'react-icons/fi';
import { ResumesData } from '../data/constants';
import styles from './Resume.module.css';

const Resume = () => {
  const [selectedResume, setSelectedResume] = useState(null);

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
      if (e.key === 'Escape') setSelectedResume(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="resumes" className="section-container">
      <h2 className="section-title">Resumes</h2>
      
      <div className="grid grid-cols-3">
        {ResumesData.map((resume) => (
          <div 
            key={resume.id} 
            className={styles.resumeCard}
            onClick={() => setSelectedResume(resume)}
          >
            <div className={styles.imageContainer}>
              <img src={resume.image} alt={resume.title} className={styles.resumeImage} />
              <div className={styles.overlay}>
                <button className={styles.iconLink} aria-label="View Resume" onClick={(e) => { e.stopPropagation(); setSelectedResume(resume); }}>
                  <span style={{color: '#fff', fontWeight: 'bold'}}>View</span>
                </button>
              </div>
            </div>
            
            <div className={styles.resumeContent}>
              <h3 className={styles.resumeTitle}>{resume.title}</h3>
              <p className={styles.resumeDescription}>{truncateWords(resume.description, 20)}</p>
              <div className={styles.cardActions}>
                <a 
                  href={resume.downloadLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={styles.cardDownloadBtn} 
                  download
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiDownload size={18} /> Download
                </a>
              </div>
            </div>
          </div>
        ))}
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
                <p>{selectedResume.description}</p>
              </div>
              
              <div className={styles.modalLinks}>
                <a href={selectedResume.downloadLink} target="_blank" rel="noreferrer" className={styles.modalLinkBtn} download>
                  <FiDownload size={20} /> Download Resume
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
