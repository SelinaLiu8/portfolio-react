import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './project.css'

import DA1 from '../../assets/digital_drawings/IMG_9573_Facetune_20-08-2020-05-38-46.jpeg'
import DA2 from '../../assets/digital_drawings/Untitled-1 (40).jpg'
import DA3 from '../../assets/digital_drawings/avatar_zuko.jpeg'
import DA4 from '../../assets/digital_drawings/purple_dress.png'
import DA5 from '../../assets/digital_drawings/vampire_final.jpg'
import DA6 from '../../assets/digital_drawings/red_hair.JPG'
import DA7 from '../../assets/digital_drawings/green_hair.PNG'

const projects = [
    {
        param: "digital_drawings",
        title: "Digital Drawings",
        imgs: [
            DA1,
            DA2,
            DA3,
            DA4,
            DA5,
            DA6,
            DA7
        ]
    },
    {
        param: "physical_drawings",
        title: "NASA Suit Challenge",
        imgs: [
            
        ]
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
    const { imgs, title, project_description } = project || {}; // Destructure image from the project object, default to an empty object if project is not found

    const [data, setData] = useState({img: '', i: 0});

    const viewImage = (img, i) => {
        setData({img, i})
    }

    const imgAction = (action) => {
        let i = data.i;
        if (action === 'next-img') {
            setData({img: imgs[i + 1], i: i + 1})
        }
        if (action === 'previous-img') {
            setData({img: imgs[i - 1], i: i - 1})
        }
        if (action === 'close-img') {
            setData({img: '', i: 0})
        }
    }

    return (
        <>
        {
            data.img &&
            <div className='img_onopen'>
                <button className='closing_button btn' onClick={() => imgAction('close-img')}>X</button>
                <button className='btn' onClick={() => imgAction('previous-img')}>&lt;</button>
                <img
                    className='img_opened' 
                    src={data.img} />
                <button className='btn' onClick={() => imgAction('next-img')}>&gt;</button>
            </div>
        }
            <div className='container'>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry gutter='10px'>
                        {imgs.map((i, index) => (
                            <img
                                className='art_img'
                                key={index}
                                src={i}
                                style={{width: "100%", display: "block", cursor: 'pointer'}}
                                alt="art work"
                                onClick={() => viewImage(i, index)}
                            />
                        ))
                        }
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
};

export default ArtProjects;