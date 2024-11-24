import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About'
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=' text-neutral-300 antialiased selection:bg-cyan-700 selection:text-white'>
      {/* <div className="flixed top-0 -z-10 h-full w-full"></div> */}
      <div className=" container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>

    </div>
  )
}

export default App
