import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Experience from './components/experience/Experience.jsx';
import Footer from './components/footer/Footer.jsx';
import Nav from './components/nav/Nav.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import './reveal.css'

const App = () => {
  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll('.reveal');

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    }

    window.addEventListener('scroll', reveal);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []); // Empty dependency array ensures effect runs only once after initial render

  return (
    <>
      <Nav className="reveal" />
      <Header className="reveal" />
      <About className="reveal" />
      <Experience className="reveal" />
      <Portfolio className="reveal" />
      <Contact className="reveal" />
      <Footer className="reveal" />
    </>
  );
};

export default App;
