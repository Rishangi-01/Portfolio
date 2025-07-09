import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { SpinningText } from './sections/SpinningText'
import { Meteors } from './components/Meteors'

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl '>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Experiences/>
      <Testimonial/>
      {/* <SpinningText text="Spinning Hello!" /> */}
      <Contact/>
      <Footer/>
       <div className="relative w-full h-screen overflow-hidden">
      <Meteors number={5} minDuration={10} maxDuration={10} minDelay={0} maxDelay={0} />
      </div>
      <div />
    </div>
  )
}

export default App