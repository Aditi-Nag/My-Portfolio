import React from 'react';
import { motion } from 'framer-motion';

// এই অংশটি একবারই থাকবে
const SkillBar = ({ name, percentage }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#000' }}>
        <span>{name}</span>
        <span>{percentage}%</span>
      </div>
      <div style={{ width: '100%', height: '10px', background: '#ddd', borderRadius: '5px' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }} // স্ক্রল করলে এনিমেশন হবে
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ height: '100%', background: '#4b0082', borderRadius: '5px' }} // বেগুনী কালার থিম অনুযায়ী
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <motion.div
      id="Skills" 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ padding: '80px 20px', minHeight: '80vh' }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px' }}>Technical Skills</h2>
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <SkillBar name="HTML" percentage={90} />
        <SkillBar name="CSS" percentage={85} />
        <SkillBar name="JavaScript" percentage={80} />
        <SkillBar name="React" percentage={75} />
      </div>
    </motion.div>
  );
};

export default Skills;
