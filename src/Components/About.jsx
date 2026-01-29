import React from "react";
import { motion } from "framer-motion";
import myPic from '../assets/my-pic.jpg';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="all-about">
      <div className='hero-left'>
           
             {/* <img src="src/assets/my-pic.jpg"
              alt="Aditi" className="my-pic"></img> */}
               <img src={myPic} alt="Aditi" className="my-pic" />
           </div>
      <div className="about-me-right">
      <h2>About Me</h2>
      <h3>Front-end Web Developer</h3>
      <p className="about">Welcome to my world! I am Aditi Nag, a passionate Frontend Developer who finds immense joy in crafting websites. I specialize in building digital experiences using HTML, CSS, JavaScript, and React. It is my dream to create innovative web platforms where people can easily fulfill their essential needs and find real value.</p>
   
     </div>
     </div>
    </motion.div>
  );
};

export default About;
