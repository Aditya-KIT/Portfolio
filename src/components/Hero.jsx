import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { PersonalInfo } from '../data/constants';
import styles from './Hero.module.css';
import profile from '../assets/profile.jpeg';


const Hero = ({ theme }) => {
  return (
    <section id="about" className="section-container" style={{ paddingBottom: '1rem' }}>
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>{PersonalInfo.name}</span>
          </h1>
          <h2 className={styles.subtitle}>
            <TypeAnimation
              sequence={[
                PersonalInfo.role,
                1000,
                'AI Engineer',
                1000,
                'Data Analyst',
                1000,
                'Devops Engineer',
                1000,
                'Cloud Engineer',
                1000,
                'Full Stack Developer',
                1000,
                'Software Developer',
                1000,
                'Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className={styles.bio}>{PersonalInfo.bio}</p>

          <div className={styles.actionButtons}>
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-outline">View Work</a>
          </div>

          <div className={styles.socials}>
            <a href={PersonalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href={PersonalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href={PersonalInfo.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
              <FiTwitter size={24} />
            </a>
          </div>
        </div>

        <div className={styles.imageContent}>
          <div className={styles.imageWrapper}>
            {/* Profile Picture */}
            <img src={profile} alt={`${PersonalInfo.name} profile`} className={styles.profileImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
