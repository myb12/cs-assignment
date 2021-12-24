import './App.css';
import CaseStudio from './components/CaseStudio/CaseStudio';
import Client from './components/Client/Client';
import Experience from './components/Experience/Experience';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Experience />
      <Services />
      <CaseStudio />
      <Mission />
      <Faq />
      <Testimonial />
      <Client />
      <Footer />
    </div>
  );
}

export default App;