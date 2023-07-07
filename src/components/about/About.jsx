import React from 'react'
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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ea esse quod consectetur error. Ratione culpa debitis architecto fuga id accusamus repellendus necessitatibus rem. Minima esse ducimus voluptate accusantium! Dolorem.</p>
          <a href="contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About