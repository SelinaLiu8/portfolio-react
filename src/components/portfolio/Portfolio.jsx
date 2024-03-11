import React from 'react'
import './portfolio.css'
import Popup from 'reactjs-popup';
import PersonalWebsite from '../../assets/website_pic.png'
import NASALogo from '../../assets/nasa-logo.png'
import MemblePersona from '../../assets/memble-persona.jpg'
import Memble from '../../assets/memble_mockup.png'
import Destigma from '../../assets/destigma_mockup.png'
import DestigmaPersona from '../../assets/destigma_persona.png'


const data = [
  {
    id: 1,
    image: PersonalWebsite,
    title: "Personal Website",
    website: "https://github.com/SelinaLiu8/portfolio-react",
    demo: "https://selinaliu8.github.io/portfolio-react/",
    btnName: "GitHub",
    description: `
      Welcome to my personal portfolio website! 🚀

      Explore my latest project, where I've meticulously crafted a seamless user experience featuring both light and dark modes. Immerse yourself in the sleek design as you navigate through the various sections, each meticulously designed with attention to detail.

      Powered by React.js, every element of this website has been hand-coded with precision and passion. From the dynamic animations to the responsive layout, every aspect has been carefully crafted to ensure a seamless experience across all devices.

      Whether you're here to discover my latest work or learn more about my skills and experiences, this portfolio represents the culmination of my dedication to creating intuitive and visually stunning web experiences.

      Take a tour, and let's embark on a journey through creativity and innovation together! 💡
    `.split('\n\n')
  },
  {
    id: 2,
    image: NASALogo,
    title: "NASA SUIT Challenge",
    website: "https://claws.engin.umich.edu/",
    btnName: "Website",
    demo: "https://www.youtube.com/watch?v=aLqUng8fB_o",
    description: "The University of Michigan’s CLAWS (Collaborative Lab For Advancing Work in Space) Team is a multi-disciplinary group of undergraduate and graduate students that has competed in the NASA SUITS Challenge since 2018. CLAWS consists of 60 students from a broad set of majors working on research, design, business, and development for space exploration."
  },
  {
    id: 3,
    image: Memble,
    title: "Memble",
    website: "https://www.canva.com/design/DAF2D-sBinw/k7vs0wNuLWRkZ1M8ofNAmQ/edit?utm_content=DAF2D-sBinw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    btnName: "Presentation",
    demo: "https://drive.google.com/file/d/1bA1q0-OE7ZshpZrrVcDI_3nh4tN4v65I/view?usp=sharing",
    description: "Memble is an app that captures who you truly are now and in the future. Through an iterative process. This app allows users to record themselves, check in with their previous selves, and reflect on how they have grown in an iterative sharable video. Furthermore, it also allows users to save photos/videos to open them up at the end of every year",
    problemTitle: "Initial Problem",
    problemText: "Capturing the essence of personal growth alongside preserving photo and video memories poses a significant challenge. It becomes a complex task to visually trace the evolution of one's identity over the years, highlighting the need for an innovative solution that seamlessly integrates the facets of self-discovery and cherished moments. We are also trying to make it so it is not overused or focused on the “social”/”popularity” aspect of modern apps. It focuses solely on capturing one’s growth, day-to-day goals, and impactful memories.",
    personaImg: MemblePersona
  },
  { id: 4,
    image: Destigma,
    title: "Destigma",
    website: "https://docs.google.com/presentation/d/1IZ_sWUXCSRlrvZUgj5QeYpEsaar4eXtb2zJ4ZPr2QPM/edit?usp=sharing",
    btnName: "Presentation",
    demo: "https://drive.google.com/file/d/1XiUWioyuJg6TJAtsPGeOXIqEAqnw9RhY/view?usp=sharing",
    description: "At DESTIGMA, we believe that comprehensive and inclusive sex education is a fundamental human right. Our mission is to provide accessible and empowering resources for people of all genders, sexual orientations, and backgrounds to help them make informed decisions about their sexual health and well-being. We strive to create a safe, sex-positive space that promotes body positivity, consent, and respect for all individuals. By destigmatizing conversations around sex and addressing the gaps in traditional sex education, we aim to empower our community with the knowledge and tools they need to navigate healthy, fulfilling sexual lives.",
    problemTitle: "Initial Problem",
    problemText: "The sex ed students receive in schools and from their parents is often abstinence based, cishet normative, otherwise incomplete or even just non-existent.",
    personaImg: DestigmaPersona}
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
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
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
                </Popup>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
