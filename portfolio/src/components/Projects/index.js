// src/components/sections/Projects.js
import React from 'react';
import './index.css'


const Projects = () => {
  const projects = [
    {
      title: 'Nxt Trendz',
      description: 'This is a E-Commerce website for shopping online items',
      image: 'https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/portfolio/nxt_trendz_fashion_retail_website.png', // Ensure you have these images in the public folder
      demoLink: 'https://nxtrendzapp9.ccbp.tech/login',
      repoLink: 'https://github.com/yourusername/projectone',
    },
    {
      title: 'Cowin Dashboard',
      description: 'This is a Covid Dashboard to view various details about Covid cases recorder in different states.',
      image: 'https://www.mygov.in/sites/all/themes/mygov/images/covid/vaccine_status.png',
      demoLink: 'https://cowinda90.ccbp.tech/',
      repoLink: 'https://github.com/yourusername/projecttwo',
    },
    {
      title: 'CCBP Timeline',
      description: 'This is a timeline of my learnings in Nxtwave Academy',
      image: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
      demoLink: 'https://ccbptimeline90.ccbp.tech/',
      repoLink: '',
    },
    {
      title: 'Github Popular Repos',
      description: 'This is a website contains the popular github repositories based on the tech frameworks.',
      image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191120192429/Top-10-Useful-Github-Repos-That-Every-Developer-Should-Follow.png',
      demoLink: 'https://gitpopularepos9.ccbp.tech/',
      repoLink: '',
    },
  ];

  return (
    <div id="projects" className="projects-section">
      <h2 className='heading'>Projects</h2>
      <p className='description'>Here are some of my projects I had worked on:</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className='project-title'>{project.title}</h3>
              <p className='project-desc'>{project.description}</p>
              <div className="project-links">
                <button className='project-live-link'>
                <a href={project.demoLink} target="_blank" rel='noreferrer'>
                  Live Demo
                </a>
                </button>
                <button className='project-repo-link'>
                <a href={project.repoLink} target="_blank" rel='noreferrer'>
                  Repository
                </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
