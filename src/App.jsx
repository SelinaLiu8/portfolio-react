import React, {useState} from 'react'
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Experience from './components/experience/Experience.jsx'
import Footer from './components/footer/Footer.jsx'
import Nav from './components/nav/Nav.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
import Services from './components/services/Services.jsx'

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;
  }
}

const App = () => {
  return (
    <>
        <Header className="reveal"/>
        <Nav className="reveal"/>
        <About className="reveal"/>
        <Experience className="reveal"/>
        <Portfolio className="reveal"/>
        {/* <Services /> */}
        <Contact className="reveal"/>
        <Footer className="reveal"/>
    </>
  )
}

export default App