import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import "./fonts.css";
import "./App.css";
import "./layout.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import Work from './components/work/Work';
import ProjectDetail from './components/work/ProjectDetail';
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
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Explicit "instant" overrides the global smooth-scroll CSS: a navigation
    // reset must jump immediately, not animate (an animated scroll racing a
    // still-loading page's layout shifts is what caused the up/down bounce).
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return null;
};

const HomePage = () => (
  <>
    <Home />
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
