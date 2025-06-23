import HeroSection from './components/HeroSection/HeroSection';
import Explore from './components/Explore/Explore';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import { useRef } from 'react';

const App = () => {
   const exploreRef = useRef(null);
   const aboutRef = useRef(null);
   const contactRef = useRef(null);

   const scrollToSection = (ref) => {
      if (ref.current) {
         ref.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <>
         <Navbar
            scrollToSection={scrollToSection}
            exploreRef={exploreRef}
            aboutRef={aboutRef}
            contactRef={contactRef} />
         <HeroSection />
         <div ref={exploreRef}>
            <Explore />
         </div>
         <div ref={aboutRef}>
            <About />
         </div>
         <div ref={contactRef}>
            <Contact />
         </div>
         <Footer />
      </>
   );
};

export default App;
