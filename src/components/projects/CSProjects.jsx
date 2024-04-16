import React from 'react';
import { useParams } from 'react-router-dom';
import PersonalWebsite from '../../assets/website_pic.png';
import NASA from '../../assets/nasa-logo.png';
import './project.css'

const projects = [
    {
        param: "personal_portfolio_website",
        image: PersonalWebsite,
        title: "Personal Portfolio Website"
    },
    {
        param: "nasa_suit_challenge",
        image: NASA,
        title: "NASA Suit Challenge"
    }
];

const CSProjects = () => {
    const params = useParams();
    console.log(params);
    const project = projects.find(proj => proj.param === params.name);
    // console.log(project);
    const { image, title } = project || {}; // Destructure image from the project object, default to an empty object if project is not found

    return (
        <div className='csProject_container container'>
            <div className='cs_project_top_container'>
                <img src={image} className='cs_project_top_image' alt={title} />
                <h1>{title}</h1>
            </div>
            <section className='project_description'>
                <h5>What is it</h5>
                <h2>Project Description</h2>
            </section>
            <section className='project_description'>
                <h5>What I did</h5>
                <h2>My Role</h2>
            </section>
        </div>
    );
};

export default CSProjects;
