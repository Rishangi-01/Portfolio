import About from "../sections/About";
import Contact from "../sections/Contact";
import Experiences from "../sections/Experiences";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Projects from "../sections/Projects";
import Testimonial from "../sections/Testimonial";

const Home = () => {

  return (
    <>
    <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
    </>
    )
};
    
    export default Home;
    