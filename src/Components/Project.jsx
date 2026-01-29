import React from 'react';
import { motion } from 'framer-motion';
import todoImg from '../assets/todo-app.png';

const Project = () => {
  const Projects = [
    {
      id: 1,
      image: todoImg,
      link: "https://react-todo-app-two-mocha.vercel.app/",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <section id="project" className="project-section">
        <h2 className="project-heading">
          Latest <span className="highlight">Project</span>
        </h2>

        <div className="Project-Container">
          {Projects.map((item) => (
           
            <a 
              href={item.link} 
              target="_blank" 
              rel="noreferrer" 
              key={item.id} 
              className="project-card-link"
            >
              <div className="project-card">
                <div className="project-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="project-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="view-btn">View Project</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
         
      