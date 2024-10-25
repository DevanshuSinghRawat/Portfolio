
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
    desc: '8.68 cgpa or 82.46%'
  },
  grad : {
    type: 'Graduation',
    course: 'Bachelor of Compute Application ( BCA )',
    institute: 'Graphic Era Hill University',
    desc: '8.27 cgpa or 78.56%'
  }
}

function App() {
  return (
    <div>
    <div className={styles.bground}> </div>
    <div className={styles.App}>
      <Header/>
      <br/>
      <About/>  
       <br/>
      <h1> Qualification </h1>
      <Cards edu={edu.postgrad} />
      <Cards edu={edu.grad} />
      <br/>
      <h1> Skills </h1>
      <Skills/>
      <br/>
      <h1> Projects </h1>
      <Projects/>
      <br/>
      <h1> Certifications </h1>
      <Certifications/>

      <ContactUs />
      
    </div>
    </div>
  );
}

export default App;
