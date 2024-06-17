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
import MembleFinal1 from '../../assets/memble/High-fidelity/Time_Capsule(Locked).png'
import MembleFinal2 from '../../assets/memble/High-fidelity/Time_Capsule(Pre-record).png'
import MembleFinal3 from '../../assets/memble/High-fidelity/Time_Capsule(Post-record).png'
import './project.css'

import ThoughtLake from '../../assets/thought_lake/ThoughtLake_title.png'
import ThoughtLakeImg from '../../assets/thought_lake/Thought_lake_square.png'
import ThoughtLakePersona from '../../assets/thought_lake/UX Persona.png'
import ThoughtLakeJounelMap from '../../assets/thought_lake/User Journey Map.jpg'

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
                primary_research: "The Memory Ward conducted extensive research, gathering insights from personal inventory assessments, foreign correspondents, and scenario-based interviews, revealing both positive and negative sentiments among users. Notably, frequent Snapchat users such as Thaslimah, Tayyiba, and Abby appreciated features like the flashback tool and private story sharing, yet expressed frustration over excessive updates. Conversely, users like Tanjina from Bangladesh sought a platform with similar functionalities to Snapchat but tailored to their region's preferences. Users across categories expressed desires for apps that track personal growth, protect memories, and integrate seamlessly into their busy schedules, emphasizing simplicity and organization. Tanjina's perspective underscored a cultural preference for functionality over aesthetics. Ultimately, users prioritize apps that preserve a wide range of moments while respecting privacy and minimizing storage usage."
            }
        ],
        define: [
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
        ],
        final: [
            {
                final_img1: MembleFinal1,
                final_img2: MembleFinal2,
                final_img3: MembleFinal3
            }
        ],
    },
    {
        param: "thought_lake",
        image: ThoughtLake,
        title: "Thought Lake",
        project_img: ThoughtLakeImg,
        project_description: "The product I’m researching is called Thought Lake, this is a product I want to make for an UX class research project. The main purpose of this product is for users to have a platform where they can share any thoughts they have. I want this platform to be therapeutic, I want this to be a place where users can find some conforms through sharing about their stressful days.",
        duration: "3 months",
        tool: "Figma, Miro",
        context: "I’ve recently been feeling really stressed, and scheduling therapy sessions always takes so long and it’s not immediate. Therefore, I thought of an idea for a mobile app where you can chat with strangers and therapists. The overall objective of this research is to validate this app and see whether this is something that will be useful to people.",
        processes: [
            "1. Challenge",
            "2. Research",
            "3. Define",
            "4. Wrap-up"
        ],
        challenge: [
            {
                users: "I want the users to be people who are looking for a safe spot to share their thoughts, especially if they are struggling with some aspects of their lives or feel like they are not ready to share something with the people around them."
            }
        ],
        research: [
            {
                research_types: "User interviews, mapping activity",
                primary_research: "I recruited 5 participants within my inclusion and exclusion criteria. All of them are between the ages of 20 - 25. Each participant showed some signs of experiencing stress which I think was helpful to the interview. My interviews covered a variety of topics ranging from different types of stress experienced, to methods to relieve stress, to people that help with stress, to other apps that help with stress, to opinions on Thought Lake. I chose the mapping activity to go along with the interviews because I think this is the best way to see how interviewees feel when they are in a stressful situation. Furthermore, I want them to sketch out a timeline of what happens when they need to seek help for their mental health. Having the interviewees actually sketch would help them refine their timelines. Sometimes, it's easier to leave things out when you’re just talking about it. I want to use this activity to see exactly which steps the interviewees find most difficult when seeking mental health help.",
                secondary_research: "My research shows that it is very beneficial for people to be able to talk about their problems anonymously. Also without being anonymous online, it creates a safe space where people have the freedom to share their thoughts without feeling judged. Users will use this product when they are feeling overwhelmed or stressed and really need a place to vent. Their goal in this context is to be able to share some of the thoughts that are overwhelming them in a safe place, these can be accomplished by creating an anonymous community where people are able to share their feelings without being judged."
            }
        ],
        define: [
            ThoughtLakePersona,
            ThoughtLakeJounelMap
        ],
        wrap: [
            {
                research_limitation: "Most of the interview participants are within the same age group, therefore, my research did not cover younger audience and older audience. Some contexts I didn’t cover are how are therapists going to be paid, what happens if people receive negative comments, and how different posts can affect other people. A bias that was hard to avoid was giving too much context on my part. Since this is a product that currently doesn’t exist, I wanted to provide as much context as I can so the participants have a good understanding of the product. But it was hard to determine how much context was too much or too little. If I were to continue with this research, I would make a basic prototype of the product and run user testing on it, so I can get more solid data on Thought Lake.",
                reflection: "Overall, I’m satisfied with this case study as it is one of my first UX research project. I’ve really learned the depth of UX research and how important each steps are. I think there are still a lot of areas for improvements in my future UX research projects, but I’m ready to face the challenges. Thank you for taking your time to read my case study! If you have any questions or suggestions please reach out to me!"
            }
        ]
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
        project_img,
        project_description, 
        duration, 
        tool, 
        context, 
        processes,
        challenge,
        research,
        define,
        wireframe,
        final,
        wrap
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
                            <img className="description-image-img" src={project_img} alt="Memble Image" />
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
                            <h3>Primary Research</h3>
                            <p>{r.primary_research}</p>
                            { r.secondary_research && (
                                <div>
                                    <h3>Secondary Research</h3>
                                    <p>{r.secondary_research}</p>
                                </div>
                            )}
                        </div>
                    ))}
                
                </section>
            )}
            { define && (
                <section className='project_description'>
                    <h5>User personas and journey map</h5>
                    <h2>Define</h2>
                    {define.map((p, index) => (
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
                    <div className='wireframe__container'>
                        {wireframe.map((w, index) => (
                            <div key={index} className='define__container'>
                                <img src={w} alt="wireframe" className='wireframe_img'/>
                            </div>
                        ))}
                    </div>
                </section>
            )}
            { final && (
                <section className='project_description'>
                    <h5>High-fidelity design</h5>
                    <h2>Final Product</h2>
                    {final.map((f, index) => (
                        <div key={index} className='define__container'>
                            <div className='final_vid__container'>
                                <h3>Promo Video</h3>
                            </div>
                        </div>
                    ))}
                </section>
            )}
            { wrap && (
                <section>
                    <h5>Final thoughts</h5>
                    <h2>Wrap-up</h2>
                    {wrap.map((w, index) => (
                        <div key={index} className='define__container'>
                            <h3>Research Limitation</h3>
                            <p>{w.research_limitation}</p>
                            <h3>Reflection</h3>
                            <p>{w.reflection}</p>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
};

export default UXProjects;