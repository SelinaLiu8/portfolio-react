import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsSendFill } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://www.linkedin.com/in/selina-liu-5b40781b8" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/SelinaLiu8" target="_blank"><BsGithub /></a>
        <a href="mailto:selinal@umich.edu" target="_blank"><BsSendFill /></a>
    </div>
  )
}

export default HeaderSocials