import React from 'react';
import { useParams } from 'react-router-dom';
import Memble from '../../assets/memble_mockup.png';
import MembleImg from '../../assets/memble_img.png'
import NASA from '../../assets/nasa-logo.png';
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
            "Define",
            "Research",
            "Persona",
            "Design",
            "Testing"
        ],
        define: [
            {
                problem: "Capturing the essence of personal growth alongside preserving photo and video memories poses a significant challenge. It becomes a complex task to visually trace the evolution of one's identity over the years, highlighting the need for an innovative solution that seamlessly integrates the facets of self-discovery and cherished moments. We are also trying to make it so it is not overused or focused on the “social”/”popularity” aspect of modern apps. It focuses solely on capturing one’s growth, day-to-day goals, and impactful memories."
            }
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
        define 
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
                                    <p>{process}</p>
                                </div>
                                ))}
                            </div>
                        )}
                </div>
            </section>
            { define && (
                <section className='project_description'>
                    <h5>Initial problems</h5>
                    <h2>Define</h2>
                    {define.map((d, index) => (
                        <div className='define__container'>
                            <h3>Problem</h3>
                            <p>{d.problem}</p>
                        </div>
                    ))}
                
                </section>
            )}
        </div>
    );
};

export default UXProjects;