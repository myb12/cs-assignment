import './App.css';
import CaseStudio from './components/CaseStudio/CaseStudio';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Mission from './components/Mission/Mission';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Experience />
      <Services />
      <CaseStudio />
      <Mission />
    </div>
  );
}

export default App;
