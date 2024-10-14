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
              <small>Masters in Information Management -- Business Intelligence</small>
              <br/>
              <small>Bachelor in Art, UX Design, Computer Science</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ software engineering projects and 10+ UX/UI projects</small>
            </article>
          </div>
          <p>I am a master's student at the University of Washington pursuing a Master of Science in Information Management specializing in Business Intelligence. Before moving to Seattle, I completed my 4-year undergraduate education at the University of Michigan with a Bachelor of Arts in Art & Design specializing in UX/UI design. <br/><br/>I am passionate about using innovative technological solutions to solve day-to-day problems. My technical background includes SQL, JavaScript, HTML/CSS, React.js, Unity, Python, C++, UX/UI design, UX research, and Figma. I also have other backgrounds in team leadership, and project management. I am eager to use my skills in technology to advance both personally and professionally.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About