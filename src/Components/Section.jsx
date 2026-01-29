import React from 'react';
import { motion } from 'framer-motion';
import myPic from '../assets/my-pic.jpg';

const Section = () => {
  return (
    <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
    <div>
          <div className="hero-section">
            
          <div className='hero-left'>
          
        <h3>Hello, It's Me</h3>
        <h1>Aditi Nag</h1>
        <h3>And I'm a <span>Front-end Developer</span></h3>
        <p>I build interactive and responsive web applications with modern technologies like HTML,CSS,JS and React .</p>
      
       </div>
       
        
        <div className='hero-right'>
           
             {/* <img src="src/assets/my-pic.jpg"
              {/* alt="Aditi" className="my-pic"></img> */} */}
              <img src={myPic} alt="Aditi" className="my-pic" />

           </div>
        </div>
        </div>
        </motion.div>
  )
};

export default Section;