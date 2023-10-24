import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineBook } from 'react-icons/ai'
import { MdOutlineDesignServices } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'
import { BiPhoneCall } from 'react-icons/bi'
import { FiSun } from 'react-icons/fi'
import { BsMoon } from 'react-icons/bs'
import { useTheme } from '../ThemeContext'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const {theme, toggleTheme} = useTheme();
  console.log(theme);

  return (
    <nav>
      <div className='nav__main'>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#experiences' ? 'active' : ''}><AiOutlineBook /></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineDesignServices /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiPhoneCall /></a>
      </div>
      <div className='nav__mode'>
        <button onClick={toggleTheme} className={theme}>
          {theme === "light" ? <FiSun /> : <BsMoon />}
        </button>
      </div>
    </nav>
  )
}

export default Nav