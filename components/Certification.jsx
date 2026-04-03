import React from 'react';
import { FiAward } from 'react-icons/fi';
import { Certifications as CertData } from '../data/constants';
import styles from './Certification.module.css';

const Certification = () => {
  return (
    <section id="certification" className="section-container">
      <h2 className="section-title">Certifications</h2>
      
      <div className={`grid grid-cols-2 ${styles.certGrid}`}>
        {CertData.map((cert) => (
          <div key={cert.id} className={styles.certCard}>
            <div className={`${styles.iconWrapper} ${cert.logo ? styles.hasLogo : ''}`}>
              {cert.logo ? (
                <img src={cert.logo} alt={cert.issuer} className={styles.certLogo} />
              ) : (
                <FiAward size={28} />
              )}
            </div>
            <div className={styles.certContent}>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.certIssuer}>{cert.issuer}</p>
              <p className={styles.certDate}>{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
