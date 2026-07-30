import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Organizations from './components/Organizations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1C0F14] text-[#EDE4D3] font-sans selection:bg-[#7A2333] selection:text-[#EDE4D3]">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Content Sections with max-w-3xl */}
      <main className="w-full">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <ScrollReveal>
          <Project />
        </ScrollReveal>

        <ScrollReveal>
          <Organizations />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

