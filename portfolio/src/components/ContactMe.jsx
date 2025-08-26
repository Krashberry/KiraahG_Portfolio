import React from 'react';
import { Navbar } from './Navbar';
import '../index.css';

export const ContactMe = () => {
  return (
    <>
      <Navbar />
      <section id="contactme" className="py-24 px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Contact <span className="text-primary"> Me</span>
        </h2>
      </section>
    </>
  );
};
