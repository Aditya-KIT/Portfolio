import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLinktree } from 'react-icons/si';
import { PersonalInfo } from '../data/constants';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socials}>
          <a href={PersonalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={24} />
          </a>
          <a href={PersonalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub size={24} />
          </a>
          <a href={PersonalInfo.socials.linktree} target="_blank" rel="noreferrer" aria-label="Linktree">
            <SiLinktree size={24} />
          </a>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} {PersonalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
