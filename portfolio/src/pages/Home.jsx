import React from 'react';
import { Navbar } from '../components/Navbar';
import { AboutMe } from '../components/AboutMe';
import { Projects } from '../components/Projects';
import { ContactMe } from '../components/ContactMe';
import NotFound from './NotFound';
import SpringDrop from '../components/SpringDrop';

export const Home = () => {
  return (
    <>
      <Navbar />
      <div
        id="home"
        className="min-h-screen bg-background text-foreground overflow-hidden"
      >
        <SpringDrop />
        <AboutMe />
        <Projects />
        <ContactMe />
      </div>
    </>
  );
};
