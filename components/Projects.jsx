import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { Projects as ProjectsData } from '../data/constants';
import styles from './Projects.module.css';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ['All', ...new Set(ProjectsData.flatMap(item => 
    Array.isArray(item.category) ? item.category : [item.category]
  ).filter(Boolean))];
  
  const filteredProjects = activeTab === 'All' 
    ? ProjectsData 
    : ProjectsData.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(activeTab) 
          : project.category === activeTab
      );

  const truncateWords = (text, maxWords) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className={styles.tabContainer}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${activeTab === category ? styles.activeTab : ''}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-3">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className={styles.projectCard}
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.overlay}>
                <a href={project.liveLink} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="Live Demo" onClick={(e) => e.stopPropagation()}>
                  <FiExternalLink size={24} />
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label="GitHub Repo" onClick={(e) => e.stopPropagation()}>
                  <FiGithub size={24} />
                </a>
              </div>
            </div>
            
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{truncateWords(project.description, 30)}</p>
              
              <div className={styles.techStack}>
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
              <FiX size={24} />
            </button>
            
            <div className={styles.modalImageContainer}>
              <img src={selectedProject.image} alt={selectedProject.title} className={styles.modalImage} />
            </div>
            
            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
              <div className={styles.modalTechStack}>
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.modalDescription}>
                {selectedProject.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                ))}
              </div>
              
              <div className={styles.modalLinks}>
                <a href={selectedProject.liveLink} target="_blank" rel="noreferrer" className={styles.modalLinkBtn}>
                  <FiExternalLink size={20} /> Live Demo
                </a>
                <a href={selectedProject.githubLink} target="_blank" rel="noreferrer" className={styles.modalLinkBtn}>
                  <FiGithub size={20} /> GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
