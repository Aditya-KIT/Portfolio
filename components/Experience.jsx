import React from 'react';
import { Experience as ExperienceData } from '../data/constants';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Experience</h2>
      
      <div className={styles.timeline}>
        {ExperienceData.map((job) => (
          <div key={job.id} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <div className={styles.headerWithLogo}>
                {job.logo && <img src={job.logo} alt={job.company} className={styles.orgLogo} />}
                <div className={styles.headerDetails}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.role}>{job.role}</h3>
                    <span className={styles.duration}>{job.duration}</span>
                  </div>
                  <h4 className={styles.company}>{job.company}</h4>
                </div>
              </div>
              <p className={styles.description}>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
