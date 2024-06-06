import React from 'react';
import { useParams } from 'react-router-dom';
import Memble from '../../assets/memble/memble_mockup.png';
import MembleImg from '../../assets/memble/memble_img.png'
import MemblePersona from '../../assets/memble/memble-persona.jpg'
import NASA from '../../assets/nasa-logo.png';
import MembleWireframe1 from '../../assets/memble/wireframe/5.jpg'
import MembleWireframe2 from '../../assets/memble/wireframe/7.jpg'
import MembleWireframe3 from '../../assets/memble/wireframe/8.jpg'
import MembleWireframe4 from '../../assets/memble/wireframe/9.jpg'
import MembleWireframe5 from '../../assets/memble/wireframe/10.jpg'
import MembleWireframe6 from '../../assets/memble/wireframe/11.jpg'
import MembleWireframe7 from '../../assets/memble/wireframe/12.jpg'
import MembleWireframe8 from '../../assets/memble/wireframe/13.jpg'
import MembleWireframe9 from '../../assets/memble/wireframe/14.jpg'
import './project.css'

const projects = [
    {
        param: "memble",
        image: Memble,
        title: "Memble",
        project_img: MembleImg,
        project_description: "Memble is an app that captures who you truly are now and in the future. Through an iterative process. This app allows users to record themselves, check in with their previous selves, and reflect on how they have grown in an iterative sharable video. Furthermore, it also allows users to save photos/videos to open them up at the end of every year.",
        duration: "3 months",
        tool: "Figma, Canva",
        context: "We wanted to create an photo app that would capture personal growth for our semeter long Interactive Design course. Memble aims to capture photo/video memories to record personal growth. At the same time, Memble also allows users to save and lock up important memories to look back on in the future.",
        processes: [
            "1. Challenge",
            "2. Research",
            "3. Persona",
            "4. Wireframe",
            "5. Testing",
            "6. Design"
        ],
        challenge: [
            {
                problem: "Capturing the essence of personal growth alongside preserving photo and video memories poses a significant challenge. It becomes a complex task to visually trace the evolution of one's identity over the years, highlighting the need for an innovative solution that seamlessly integrates the facets of self-discovery and cherished moments. We are also trying to make it so it is not overused or focused on the “social”/”popularity” aspect of modern apps. It focuses solely on capturing one’s growth, day-to-day goals, and impactful memories.",
                users: "Users of all ages. Advertising would target parents and grandparents who have money and could buy it as a gift for younger generations."
            }
        ],
        research: [
            {
                research_types: "Personal Inventory, foreign correspondents, scenerios",
                research_results: "The Memory Ward conducted extensive research, gathering insights from personal inventory assessments, foreign correspondents, and scenario-based interviews, revealing both positive and negative sentiments among users. Notably, frequent Snapchat users such as Thaslimah, Tayyiba, and Abby appreciated features like the flashback tool and private story sharing, yet expressed frustration over excessive updates. Conversely, users like Tanjina from Bangladesh sought a platform with similar functionalities to Snapchat but tailored to their region's preferences. Users across categories expressed desires for apps that track personal growth, protect memories, and integrate seamlessly into their busy schedules, emphasizing simplicity and organization. Tanjina's perspective underscored a cultural preference for functionality over aesthetics. Ultimately, users prioritize apps that preserve a wide range of moments while respecting privacy and minimizing storage usage."
            }
        ],
        persona: [
            MemblePersona
        ],
        wireframe: [
            MembleWireframe1,
            MembleWireframe2,
            MembleWireframe3,
            MembleWireframe4,
            MembleWireframe5,
            MembleWireframe6,
            MembleWireframe7,
            MembleWireframe8,
            MembleWireframe9
        ]
    },
    {
        param: "destigma",
        image: NASA,
        title: "Destigma",
        project_description: "The University of Michigan’s CLAWS (Collaborative Lab For Advancing Work in Space) Team is a multi-disciplinary group of undergraduate and graduate students that has competed in the NASA SUITS Challenge since 2018. CLAWS consists of 60 students from a broad set of majors working on research, design, business, and development for space exploration.\nWe have been working on the NASA Suit Challenge for the past 3 years. We develop softwares consist of AR techonologies, AI models, web sockets, and more. We also develop hardware products."
    },
    {
        param: "uevent",
        image: NASA,
        title: "Uevent",
        project_description: "The University of Michigan’s CLAWS (Collaborative Lab For Advancing Work in Space) Team is a multi-disciplinary group of undergraduate and graduate students that has competed in the NASA SUITS Challenge since 2018. CLAWS consists of 60 students from a broad set of majors working on research, design, business, and development for space exploration.\nWe have been working on the NASA Suit Challenge for the past 3 years. We develop softwares consist of AR techonologies, AI models, web sockets, and more. We also develop hardware products."
    }
];

const UXProjects = () => {
    const params = useParams();
    console.log(params);
    const project = projects.find(proj => proj.param === params.name);
    console.log(project);
    const { 
        image, 
        title, 
        project_description, 
        duration, 
        tool, 
        context, 
        processes,
        challenge,
        research,
        persona,
        wireframe
    } = project || {}; // Destructure image from the project object, default to an empty object if project is not found

    return (
        <div className='project_container container'>
            <div className='project_top_container'>
                <img src={image} className='project_top_image' alt={title} />
                <h1>{title}</h1>
            </div>
            <section className='project_description'>
                <h5>What is it</h5>
                <h2>Project Description</h2>
                <div className="description__container">
                    <div className='description-img-bg'>
                        <div className="description-image">
                            <img className="description-image-img" src={MembleImg} alt="Memble Image" />
                        </div>
                    </div>
                    <div>
                        <p className='description__text'>{project_description}</p>
                        <article className="description__card">
                            <p>Duration: {duration}</p>
                            <p>Tools: {tool}</p>
                    </article>
                    </div>
                </div>
            </section>
            <section className='project_description'>
                <h5>Purpose of this project</h5>
                <h2>Context</h2>
                <p>{context}</p>
            </section>
            <section className='project_description'>
                <h5>The process</h5>
                <h2>Steps</h2>
                <div className="process__circles">
                    {processes && (
                        <div className="process__row">
                            {processes.map((process, index) => (
                                <div key={index} className="process__step">
                                    <p>{process.split('. ')[0]}.<br />{process.split('.')[1]}</p>
                                </div>
                                ))}
                            </div>
                        )}
                </div>
            </section>
            { challenge && (
                <section className='project_description'>
                    <h5>Initial insights</h5>
                    <h2>Challenge</h2>
                    {challenge.map((c, index) => (
                        <div key={index}  className='define__container'>
                            <h3>Problem</h3>
                            <p>{c.problem}</p>
                            <h3>Targeted Users</h3>
                            <p>{c.users}</p>
                        </div>
                    ))}
                
                </section>
            )}
            { research && (
                <section className='project_description'>
                    <h5>User research</h5>
                    <h2>Research</h2>
                    {research.map((r, index) => (
                        <div key={index} className='define__container'>
                            <h3>Research Methods</h3>
                            <p>{r.research_types}</p>
                            <h3>Research Results</h3>
                            <p>{r.research_results}</p>
                        </div>
                    ))}
                
                </section>
            )}
            { persona && (
                <section className='project_description'>
                    <h5>User personas</h5>
                    <h2>Persona</h2>
                    {persona.map((p, index) => (
                        <div key={index} className='define__container'>
                            <img src={p} alt="persona" className='persona_img'/>
                        </div>
                    ))}
                
                </section>
            )}
            { wireframe && (
                <section className='project_description'>
                    <h5>Low-fidelity design</h5>
                    <h2>Wireframe</h2>
                    {wireframe.map((w, index) => (
                        <div key={index} className='define__container'>
                            <img src={w} alt="wireframe" className='persona_img'/>
                        </div>
                    ))}
                
                </section>
            )}
        </div>
    );
};

export default UXProjects;