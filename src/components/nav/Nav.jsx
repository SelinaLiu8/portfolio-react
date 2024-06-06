import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineBook } from 'react-icons/ai';
import { MdOutlineDesignServices } from 'react-icons/md';
import { RiServiceLine } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { useTheme } from '../ThemeContext';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const { theme, toggleTheme } = useTheme();
  const basePath = '/portfolio-react'; // Change this to your base path

  return (
    <nav>
      <div className='nav__main'>
        <a href={`${basePath}`} onClick={() => setActiveNav(basePath)} className={activeNav === basePath ? 'active' : ''}><AiOutlineHome /></a>
        <a href={`${basePath}#about`} onClick={() => setActiveNav(`${basePath}about`)} className={activeNav === `${basePath}about` ? 'active' : ''}><AiOutlineUser /></a>
        <a href={`${basePath}#experiences`} onClick={() => setActiveNav(`${basePath}experiences`)} className={activeNav === `${basePath}experiences` ? 'active' : ''}><AiOutlineBook /></a>
        <a href={`${basePath}#portfolio`} onClick={() => setActiveNav(`${basePath}portfolio`)} className={activeNav === `${basePath}portfolio` ? 'active' : ''}><MdOutlineDesignServices /></a>
        <a href={`${basePath}#contact`} onClick={() => setActiveNav(`${basePath}contact`)} className={activeNav === `${basePath}contact` ? 'active' : ''}><BiPhoneCall /></a>
      </div>
      <div className='nav__mode'>
        <button onClick={toggleTheme} className={theme}>
          {theme === 'light' ? <FiSun /> : <BsMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
