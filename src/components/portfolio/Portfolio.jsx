import React from 'react'
import './portfolio.css'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import PersonalWebsite from '../../assets/website_pic.png'
import NASALogo from '../../assets/nasa_topimg.jpeg'
import Memble from '../../assets/memble/memble_mockup.png'
import Destigma from '../../assets/destigma_mockup.png'
import DestigmaPersona from '../../assets/destigma_persona.png'
import ThoughtLake from '../../assets/thought_lake/Thought_lake_square.png'
import UEvent from '../../assets/Uevent.png'
import DigitalDrawing from '../../assets/digital_draw_cover.jpg'
import PhysicalDrawing from '../../assets/physical_draw_cover.jpg'
import ThreeDModel from '../../assets/3d_cover.png'
import GraphicDesign from '../../assets/graphic_design_cover.png'

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
    routeName : "thought_lake",
    title : "Thought_Lake",
    image: ThoughtLake
  }, 
  {
    routeName : "uevent",
    title : "UEvent",
    image: UEvent
  }
];

const artProjects = [
  {
    routeName : "digital_drawings",
    title : "Digital Drawings",
    image: DigitalDrawing
  }, 
  {
    routeName : "physical_drawings",
    title : "Sketches/Paintings",
    image: PhysicalDrawing
  }, 
  {
    routeName : "3d_modeling",
    title : "3D Modeling/Product Design",
    image: ThreeDModel
  },
  {
    routeName : "graphic_design",
    title : "Graphic Design",
    image: GraphicDesign
  }
];

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
                      <Link key={routeName} to={`portfolio/cs/${routeName}`}>
                        <button className='btn btn-primary'>Learn More!</button>
                      </Link>
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
                      <Link key={routeName} to={`portfolio/ux/${routeName}`}>
                        <button className='btn btn-primary'>Learn More!</button>
                      </Link>
                    </article>
                  )
                })
              }
            </div>
          </div>
          <div className='projects'>
            <h4 className='project__title'>Art Projects</h4>
            <div className='grid__container'>
              {
                artProjects.map(({routeName, title, image}) => {
                  return (
                    <article key={routeName} className="portfolio__item">
                      <div className="portfolio__item-img">
                        <img src={image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <Link key={routeName} to={`portfolio/art/${routeName}`}>
                        <button className='btn btn-primary'>Learn More!</button>
                      </Link>
                    </article>
                  )
                })
              }
            </div>
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
