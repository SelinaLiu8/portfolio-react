import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>SelinaL</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="http://www.linkedin.com/in/selina-liu-5b40781b8"><BsLinkedin/></a>
        <a href="https://github.com/SelinaLiu8"><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; EGATOR Tutorials. All rights reserved</small>
        <small>This website was created with inspiration from EGATOR Tutorials by EGATOR.</small>
      </div>
    </footer>
  )
}

export default Footer