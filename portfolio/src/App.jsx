// import { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <>
      <Navbar />
      <h1>This is the APP SCREEN.</h1>
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
