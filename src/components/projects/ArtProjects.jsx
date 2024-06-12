import React from 'react';
import { useParams } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './project.css'

import DA1 from '../../assets/digital_drawings/IMG_9573_Facetune_20-08-2020-05-38-46.jpeg'
import DA2 from '../../assets/digital_drawings/Untitled-1 (40).jpg'
import DA3 from '../../assets/digital_drawings/avatar_zuko.jpeg'
import DA4 from '../../assets/digital_drawings/purple_dress.png'
import DA5 from '../../assets/digital_drawings/vampire_final.jpg'
import DA6 from '../../assets/digital_drawings/red_hair.JPG'

const projects = [
    {
        param: "digital_drawings",
        title: "Digital Drawings",
        img: [
            DA1,
            DA2,
            DA3,
            DA4,
            DA5,
            DA6
        ]
    },
    {
        param: "physical_drawings",
        title: "NASA Suit Challenge",
        project_description: "The University of Michigan’s CLAWS (Collaborative Lab For Advancing Work in Space) Team is a multi-disciplinary group of undergraduate and graduate students that has competed in the NASA SUITS Challenge since 2018. CLAWS consists of 60 students from a broad set of majors working on research, design, business, and development for space exploration.\nWe have been working on the NASA Suit Challenge for the past 3 years. We develop softwares consist of AR techonologies, AI models, web sockets, and more. We also develop hardware products."
    },
    {
        param: "3d_modeling",
        title: "Personal Portfolio Website"
    },
    {
        param: "graphic_design",
        title: "NASA Suit Challenge",
        project_description: "The University of Michigan’s CLAWS (Collaborative Lab For Advancing Work in Space) Team is a multi-disciplinary group of undergraduate and graduate students that has competed in the NASA SUITS Challenge since 2018. CLAWS consists of 60 students from a broad set of majors working on research, design, business, and development for space exploration.\nWe have been working on the NASA Suit Challenge for the past 3 years. We develop softwares consist of AR techonologies, AI models, web sockets, and more. We also develop hardware products."
    }, 
];

const ArtProjects = () => {
    const params = useParams();
    console.log(params);
    const project = projects.find(proj => proj.param === params.name);
    // console.log(project);
    const { img, title, project_description } = project || {}; // Destructure image from the project object, default to an empty object if project is not found

    return (
        <div className='container'>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                    {img.map((i, index) => (
                        <img
                            key={index}
                            src={i}
                            style={{width: "100%", display: "block"}}
                            alt="art work"
                        />
                    ))

                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default ArtProjects;