 import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import  React,{useState}  from 'react';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Project from './Components/Project';
import Section from './Components/Section';
function App() {

    
  
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

    
       <div>
        <BrowserRouter>
            <nav className="all-link">
              <div className='portfolio'>
             <p>Portfolio</p>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
             <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
             
             <span style={{fontSize: '24px'}}>☰</span> 
          </div>

            <div className={isMenuOpen ? 'link active' : 'link'}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/about" onClick={toggleMenu}>About</Link>
            <Link to="/Skills" onClick={toggleMenu}>Skills</Link>
            <Link to="/Project" onClick={toggleMenu}>Project</Link>
            <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
          </div>
           </nav>
           <Routes>
            <Route path="/" element={<Section />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
           </Routes>
        </BrowserRouter>
       
      </div>
     
  )
};

export default App;
