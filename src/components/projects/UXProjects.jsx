import React from 'react';
import { useParams } from 'react-router-dom';
import PersonalWebsite from '../../assets/website_pic.png';
import NASA from '../../assets/nasa-logo.png';
import './project.css'

const projects = [
    {
        param: "memble",
        image: PersonalWebsite,
        title: "Memble"
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
    const { image, title, project_description } = project || {}; // Destructure image from the project object, default to an empty object if project is not found

    return (
        <div className='csProject_container container'>
            <div className='cs_project_top_container'>
                <img src={image} className='cs_project_top_image' alt={title} />
                <h1>{title}</h1>
            </div>
            <section className='project_description'>
                <h5>What is it</h5>
                <h2>Project Description</h2>
                <p>{project_description}</p>
            </section>
            <section className='project_description'>
                <h5>What I did</h5>
                <h2>My Role</h2>
            </section>
            <section className='project_description'>
                <h5>The finish project</h5>
                <h2>Result</h2>
            </section>
        </div>
    );
};

export default UXProjects;