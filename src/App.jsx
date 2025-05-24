import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main
      className="antialiased"
      style={{ color: '#ffffff', backgroundColor: '#0a0a0a' }}
    >
      <div
        className="fixed top-0 -z-10 h-full w-full"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0, 255, 157, 0.3), rgba(0, 0, 0, 1))',
        }}
      ></div>
      <div
        className="fixed inset-0 -z-5"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 255, 157, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 157, 0.1) 1px, transparent 1px)',
          backgroundSize: '14px 24px',
        }}
      ></div>

      <div className="mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;
