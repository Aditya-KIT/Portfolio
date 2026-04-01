import React, { useState, useEffect } from 'react';
import styles from './UnderDevelopmentPopup.module.css';

const UnderDevelopmentPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    let timeoutId;
    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown);
      
      // Automatically close after 10 seconds
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose} aria-label="Close">
          &times;
        </button>
        <p className={styles.message}>Site is under development</p>
      </div>
    </div>
  );
};

export default UnderDevelopmentPopup;
