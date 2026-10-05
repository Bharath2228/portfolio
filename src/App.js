import React from 'react';
import "./fonts.css";
import "./App.css";
import "./layout.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Work from './components/work/Work';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import { Certificates } from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />

      <main className="main" id="main">
        <Home />
        <Work />
        <About />
        <Qualification />
        <Skills />
        <Certificates />
        <Contact />
      </main>

      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
