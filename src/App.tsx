import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Trust from './components/Trust';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BookDemoModal from './components/BookDemoModal';

function App() {
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar onOpenDemo={() => setShowDemo(true)} />
      <Hero onOpenDemo={() => setShowDemo(true)} />
      <Problems />
      <Solution />
      <Features />
      <HowItWorks />
      <Trust />
      <CTASection onOpenDemo={() => setShowDemo(true)} />
      <Footer onOpenDemo={() => setShowDemo(true)} />
      {showDemo && <BookDemoModal onClose={() => setShowDemo(false)} />}
    </div>
  );
}

export default App;
