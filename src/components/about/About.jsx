import React, { useState } from 'react'
import './about.css'
import AboutImg from '../../assets/IMG_9300.jpg'
import { FaAward } from 'react-icons/fa'
import { MdSchool } from 'react-icons/md'
import { AiFillProject } from 'react-icons/ai'

const About = () => {

  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year working experience</small>
            </article>
            <article className='about__card'>
              <MdSchool className='about__icon'/>
              <h5>Education</h5>
              <small>4 year Bachelor, Art, UX Design, Computer Science</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ software engineering projects and 10+ UX/UI projects</small>
            </article>
          </div>
          <p>I'm an undergrad student at the University of Michigan majoring in art & design and minoring in computer science and user experience design. About a year and a half ago, I began experimenting with coding and UX/UI design. In order to engage more closely with the UX/UI industry, I joined Alpha Theta Delta, a professional multidisciplinary design fraternity on campus. I presently hold the job of VP of Outreach, where I get to assist our fraternity in developing relationships with other organizations. In addition, I became a member of CLAWS's (Collaborative Lab for Advancing Work in Space) Augmented Reality team to build the annual NASA Spacesuit Challenge in Unity and C#. Procter & Gamble recently hired me as a summer intern for information technology, where I will focus on UX/UI design.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About