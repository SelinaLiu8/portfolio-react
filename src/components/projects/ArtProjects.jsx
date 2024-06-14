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
import DA8 from '../../assets/digital_drawings/avatar_sokka.JPG'
import DA9 from '../../assets/digital_drawings/IMG_0277.JPG'

import PA1 from '../../assets/physical_drawings/cloud.jpg'
import PA2 from '../../assets/physical_drawings/david.jpg'
import PA3 from '../../assets/physical_drawings/painting1.jpg'
import PA4 from '../../assets/physical_drawings/painting2.jpg'
import PA5 from '../../assets/physical_drawings/painting3.jpg'
import PA6 from '../../assets/physical_drawings/still_life1.jpg'
import PA7 from '../../assets/physical_drawings/still_life2.jpg'

import TD1 from '../../assets/3d/meat_final1.png'
import TD2 from '../../assets/3d/meat_final2.png'
import TD3 from '../../assets/3d/meat_final3.png'
import TD4 from '../../assets/3d/meat1.png'
import TD5 from '../../assets/3d/meat2.png'
import TD6 from '../../assets/3d/meat3.png'
import TD7 from '../../assets/3d/earbuds1.png'
import TD8 from '../../assets/3d/earbuds2.png'
import TD9 from '../../assets/3d/earbuds3.png'
import TD10 from '../../assets/3d/earbuds4.png'
import TD11 from '../../assets/3d/ring2.png'
import TD12 from '../../assets/3d/ring1.png'
import TD13 from '../../assets/3d/ring3.png'
import TD14 from '../../assets/3d/ring4.png'
import TD15 from '../../assets/3d/Couch1_final.jpg'
import TD16 from '../../assets/3d/Couch2_final.png'
import TD17 from '../../assets/3d/Couch3_final.jpg'

import GD1 from '../../assets/graphic_design/asagumo.png'
import GD2 from '../../assets/graphic_design/poker club logo with background.png'
import GD3 from '../../assets/graphic_design/poker club logo.png'
import GD4 from '../../assets/graphic_design/poker logo 2.png'

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
            DA7,
            DA8,
            DA9
        ]
    },
    {
        param: "physical_drawings",
        title: "NASA Suit Challenge",
        imgs: [
            PA1,
            PA2,
            PA3,
            PA4,
            PA5,
            PA6,
            PA7
        ]
    },
    {
        param: "3d_modeling",
        title: "Personal Portfolio Website",
        imgs: [
            TD1,
            TD2,
            TD3,
            TD4,
            TD5,
            TD6,
            TD7,
            TD8,
            TD9,
            TD10,
            TD11,
            TD12,
            TD13,
            TD14,
            TD15,
            TD16,
            TD17
        ]
    },
    {
        param: "graphic_design",
        title: "NASA Suit Challenge",
        imgs: [
            GD1,
            GD2,
            GD3,
            GD4
        ]
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