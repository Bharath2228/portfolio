import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "./fonts.css";
import "./App.css";
import "./layout.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Work from './components/work/Work';
import ProjectDetail from './components/work/ProjectDetail';
import About from './components/about/About';
import Qualification from './components/qualification/Qualification';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

// react-router doesn't scroll to a hash or reset scroll on client-side
// navigation the way a full page load does, so we do it ourselves.
const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const HomePage = () => (
  <>
    <Home />
    <About />
    <Qualification />
    <Work />
    <Skills />
    <Contact />
  </>
);

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Header />

      <main className="main" id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <ScrollUp />
      <Footer />
    </>
  );
}

export default App;
