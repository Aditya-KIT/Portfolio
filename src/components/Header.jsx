import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLinktree } from 'react-icons/si';
import { PersonalInfo } from '../data/constants';
import styles from './Header.module.css';

const Header = ({ theme, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">{PersonalInfo.name.split(' ')[0]}<span>.</span></a>
        </div>

        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} onClick={closeMobileMenu}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
          {isMobileMenuOpen && (
            <div className={styles.mobileSocials}>
              <a href={PersonalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={24} /></a>
              <a href={PersonalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={24} /></a>
              <a href={PersonalInfo.socials.linktree} target="_blank" rel="noreferrer" aria-label="Linktree"><SiLinktree size={24} /></a>
            </div>
          )}
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.desktopSocials}>
            <a href={PersonalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
            <a href={PersonalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
            <a href={PersonalInfo.socials.linktree} target="_blank" rel="noreferrer" aria-label="Linktree"><SiLinktree size={20} /></a>
          </div>

          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>

          <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
