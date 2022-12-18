import Socials from './components/Socials';
import Header from './Header';
import Hero from './Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div class="bg-body text-text font-roboto">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
      <Socials />
    </div>
  );
}

export default App;
