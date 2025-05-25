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
      className="relative antialiased w-full overflow-hidden min-h-screen"
      style={{
        color: '#ffffff',
        backgroundColor: '#0a0a0a',
        backgroundImage: `
          radial-gradient(at 100% 0%, rgb(0, 255, 157, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 0%, rgb(0, 204, 125, 0.05) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgb(0, 255, 157, 0.05) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgb(0, 204, 125, 0.05) 0px, transparent 50%)
        `,
      }}
    >
      {/* Ambient gradient background */}
      <div
        className="fixed top-0 -z-10 h-full w-full opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% -20%, rgba(0, 255, 157, 0.15), rgba(0, 0, 0, 0))',
          filter: 'blur(100px)',
        }}
      ></div>

      {/* Subtle grid pattern */}
      <div
        className="fixed inset-0 -z-5 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 255, 157, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 157, 0.1) 1px, transparent 1px)',
          backgroundSize: '14px 24px',
          contain: 'paint',
        }}
      ></div>

      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 -z-5 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      ></div>

      <div className="relative w-full">
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
