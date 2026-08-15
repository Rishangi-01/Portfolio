import React from 'react';

import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experiences";
import Testimonial from "../sections/Testimonial";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Workpage() {
  return (
    <div>
      <Navbar />
        <Hero />
        <Projects />
        <Experiences />
        <Testimonial />
        <Footer />
    </div>
  );
}

export default Workpage;