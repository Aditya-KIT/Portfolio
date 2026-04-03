import React from 'react';
import { Skills as SkillsData } from '../data/constants';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className="section-container" style={{ paddingTop: '2rem' }}>
      <h2 className="section-title">My Skills</h2>
      
      <div className={styles.skillsGrid}>
        {SkillsData.map((skillGroup, index) => (
          <div key={index} className={styles.skillCard}>
            <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
            <div className={styles.skillItems}>
              {skillGroup.items.map((skill, idx) => (
                <div key={idx} className={styles.skillTag}>
                  <div className={styles.skillIconContainer}>
                    <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
                  </div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
