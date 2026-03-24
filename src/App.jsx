import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Meteors } from "./components/Meteors";
import { Particles } from "./components/Particles";

const App = () => {
  return (
    <div className="relative">
      {/* Meteors as background */}
      <div className="fixed inset-0 -z-10">
        <Meteors />
        <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
              />
      </div>

      {/* Main content */}
      <div className="container-fluid mx-auto max-w-8xl relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
