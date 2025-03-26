import React from 'react';
import { useParams } from 'react-router-dom';
import PersonalWebsite from '../../assets/website_pic.png';
import PersonalImg1 from '../../assets/portfolio_website_img.png'
import PersonalImg2 from '../../assets/react_photo.png'
import NASA from '../../assets/nasa_topimg.jpeg';
import NASASuits from '../../assets/suits_tile.jpg';
import CLAWS from '../../assets/claws_um_logo.jpg'
import CrisprBuildr from '../../assets/crisprbuildr_header.png'
import Crisp1 from '../../assets/CB_ss1.png'
import Crisp2 from '../../assets/CB2.jpg'
import './project.css'

const projects = [
    {
        param: "crispr_buildr",
        image: CrisprBuildr,
        title: "CrisprBuildr",
        project_description: "CrisprBuildr is a web-based application designed to streamline CRISPR/Cas9-based genome engineering experiments by enabling users to efficiently delete genes or insert fluorescent protein tags at the N- or C-terminus of their gene of interest. Built on the Drosophila melanogaster genome, the platform serves as a template for adaptation to other genomes. To support advanced protein characterization in vivo, we have developed new tagging vectors incorporating EGFP and mCherry, combined with the small peptide SspB-Q73R for iLID-based optogenetic applications. CrisprBuildr simplifies the process of designing guide RNAs and repair template vectors, reducing the repetitive and time-consuming nature of construct generation. As an open-source tool, future iterations may expand to include additional tagging or deletion vectors, broader genome compatibility, and enhanced CRISPR applications.",
        my_role: "In this role, I managed the migration of the application repository, implemented key features such as a new 'Delete' function for gene template management, and resolved over 20 critical bugs to improve system stability. I also documented essential processes for SQL and IP user access, ensuring seamless knowledge transfer. Additionally, my contributions were recognized through authorship in bioRxiv and potentially G3 publications, reflecting the impact of my technical work on the broader research community. You can find the publication here: [bioRxiv](https://www.biorxiv.org/content/10.1101/2025.02.28.640916v1).",
        demo: "http://142.93.118.6/",
        github:"https://github.com/SelinaLiu8/fly-server",
        first_img: Crisp1,
        second_img: Crisp2
    },
    {
        param: "personal_portfolio_website",
        image: PersonalWebsite,
        title: "Personal Portfolio Website",
        project_description: "Explore my latest project, where I've meticulously crafted a seamless user experience featuring both light and dark modes. Immerse yourself in the sleek design as you navigate through the various sections, each meticulously designed with attention to detail. Powered by React.js, every element of this website has been hand-coded with precision and passion. From the dynamic animations to the responsive layout, every aspect has been carefully crafted to ensure a seamless experience across all devices. Whether you're here to discover my latest work or learn more about my skills and experiences, this portfolio represents the culmination of my dedication to creating intuitive and visually stunning web experiences. Take a tour, and let's embark on a journey through creativity and innovation together!",
        my_role: "Since this is a personal project, I worked on both the design and the development of website.",
        demo: "https://selinaliu8.github.io/portfolio-react/",
        github:"https://github.com/SelinaLiu8/portfolio-react",
        first_img: PersonalImg1,
        second_img: PersonalImg2
    },
    {
        param: "nasa_suit_challenge",
        image: NASA,
        title: "NASA Suit Challenge",
        project_description: "The University of Michigan’s CLAWS (Collaborative Lab For Advancing Work in Space) Team is a multi-disciplinary group of undergraduate and graduate students that has competed in the NASA SUITS Challenge since 2018. CLAWS consists of 60 students from a broad set of majors working on research, design, business, and development for space exploration.\nWe have been working on the NASA Suit Challenge for the past 3 years. We develop softwares consist of AR techonologies, AI models, web sockets, and more. We also develop hardware products.",
        my_role: "I was on the team for 2 years. I started off as an AR developer mainly focusing on developling the AR features of the NASA Suit. At the beginning of my 2nd year, I also took on the Product Lead role where I servered as the feature team manager.",
        demo: "https://youtu.be/6E4utYSxSXE?si=b3-17EMZt4gNZvSP",
        github:"https://github.com/CLAWS-UMICH/IRIS-2023-2024",
        first_img: NASASuits,
        second_img: CLAWS
    }
];

const CSProjects = () => {
    const params = useParams();
    console.log(params);
    const project = projects.find(proj => proj.param === params.name);
    // console.log(project);
    const { image, title, project_description, my_role, demo, github, first_img, second_img } = project || {}; // Destructure image from the project object, default to an empty object if project is not found
    console.log("first image: ", first_img);

    return (
        <div className='project_container container'>
            <div className='project_top_container'>
                <img src={image} className='project_top_image' alt={title} />
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
                <p>{my_role}</p>
            </section>
            <section className='project_description'>
                <h5>The finish project</h5>
                <h2>Result</h2>
                <div className='result__container'>
                    <article className="portfolio__item cs_project_card">
                        <div className="portfolio__item-img cs_card_img">
                            <img src={first_img} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <a href={demo}>
                        <button className='btn btn-primary cs__btn'>Demo!</button>
                        </a>
                    </article>
                    <article className="portfolio__item cs_project_card">
                        <div className="portfolio__item-img cs_card_img">
                            <img src={second_img} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <a href={github}>
                        <button className='btn btn-primary cs__btn'>Github!</button>
                        </a>
                </article>
                </div>
            </section>
        </div>
    );
};

export default CSProjects;
