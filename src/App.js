
import './App.css';
import styles from './Style.module.css'
import Header from './components/Header';
import About from './components/About';
import React from 'react';
import Cards from './components/Cards';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactUs from './components/ContactUs';

let edu = {
    postgrad : {
    type: 'Post Graduation',
    course: 'Master of Computer Application ( MCA )',
    institute: 'Graphic Era Hill University',
    desc: '8.68 sgpa or 82.46%'
  },
  grad : {
    type: 'Graduation',
    course: 'Bachelor of Compute Application ( BCA )',
    institute: 'Graphic Era Hill University',
    desc: '8.27 sgpa or 78.56%'
  }
}

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <hr/>
      <About/>  
       <hr/>
      <h1> Qualification </h1>
      <Cards edu={edu.postgrad} />
      <Cards edu={edu.grad} />
      <hr/>
      <h1> Skills </h1>
      <Skills/>
      <hr/>
      <h1> Projects </h1>
      <Projects/>
      <hr/>
      <h1> Certifications </h1>
      <Certifications/>
      {/* <h1> Contact Us </h1> */}
      <ContactUs />
      
    </div>
  );
}

export default App;
