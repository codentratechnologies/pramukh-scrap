import React from 'react';
import './index.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Materials from './components/Materials';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Materials />
        <Process />
        <WhyChooseUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
