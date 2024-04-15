import React from 'react'
import './portfolio.css'
import Popup from 'reactjs-popup';
import PersonalWebsite from '../../assets/website_pic.png'
import NASALogo from '../../assets/nasa-logo.png'
import MemblePersona from '../../assets/memble-persona.jpg'
import Memble from '../../assets/memble_mockup.png'
import Destigma from '../../assets/destigma_mockup.png'
import DestigmaPersona from '../../assets/destigma_persona.png'
import UEvent from '../../assets/Uevent.png'

const csProjects = [
  {
    routeName : "personal_portfolio_website",
    title : "Personal Portfolio Website",
    image: PersonalWebsite
  },
  {
    routeName : "nasa_suit_challenge",
    title : "NASA Suit Challenge",
    image: NASALogo
  }
];

const uxProjects = [
  {
    routeName : "memble",
    title : "Memble",
    image: Memble
  }, 
  {
    routeName : "destigma",
    title : "Destigma",
    image: Destigma
  }, 
  {
    routeName : "uevent",
    title : "UEvent",
    image: UEvent
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className='portfolio__btns'>
          <div className='projects'>
            <h4 className='project__title'>Software Projects</h4>
            <div className='grid__container'>
              {
                csProjects.map(({routeName, title, image}) => {
                  return (
                    <article key={routeName} className="portfolio__item">
                      <div className="portfolio__item-img">
                        <img src={image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <button className='btn btn-primary'>Learn More!</button>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className='projects'>
            <h4 className='project__title'>UX/UI Projects</h4>
            <div className='grid__container'>
              {
                uxProjects.map(({routeName, title, image}) => {
                  return (
                    <article key={routeName} className="portfolio__item">
                      <div className="portfolio__item-img">
                        <img src={image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <button className='btn btn-primary'>Learn More!</button>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className='projects'>
            <h4 className='project__title'>Art Projects</h4>
          </div>
        </div>
        {/* {
          data.map(({id, image, title, website, demo, description, btnName, problemTitle, problemText, personaImg}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <Popup
                    trigger={<button className='btn btn-primary'> Learn More</button>}
                    modal
                    closeOnDocumentClick
                    contentStyle={{ width: '80%', maxWidth: '1000px', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                  <div className="container popup__container">
                    <h2>Project Description</h2>
                    <p>{description}</p>
                    {
                      personaImg && // Render persona image only if it exists in the data
                      <>
                        <h2>{problemTitle}</h2>
                        <p>{problemText}</p>
                        <h2>Persona</h2>
                        <img className='popup-img' src={personaImg} alt={title} />
                      </>
                    }
                    <a href={website} className='btn' target='_blank'>{btnName}</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                  </div>
                </Popup>
              </div>
              </article>
            )
          })
        } */}
      </div>
    </section>
  )
}

export default Portfolio
