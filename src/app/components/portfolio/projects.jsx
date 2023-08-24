'use client'
import {useState} from 'react';
import Detail from './detail';

const Projects = () => {

    const projects = [
        {
            title: 'Ski Resorts', 
            description: 'Organize your ski trips with this interactive map featuring resort details, in-app bookmarking tools, and user reviews.',
            features: [
                'Developed RESTful full stack application deployed through Render ', 
                'Utilized JS React frontend with MUI style components and a Rails API backend',
                'User authentication/authorization with bcrypt gem and session cookies middleware',
                'Leveraged Mapbox interactive map',
                'Implemented useContext to globally manage state'
            ],
            github:'https://github.com/JordanTaylorJ/ski_maps',
            images: ['./ski_resort.jpg', './ski_ERD.jpg']
        }, 
        {
            title: 'Book Club',
            description: 'A community space to share and discuss favorite books.',
            features: [
                'Full stack application with JS React frontend, MUI style components, and Rails API backend',
                'Features user authentication/authorization utilizing session cookies middleware',
                'Demonstrates MVC architecture and the use of Active Record for Object-Relational Mapping'
            ],
            github: 'https://github.com/JordanTaylorJ/book_club',
            images: ['./book_club.png']
        }, 
        {
            title: 'Portfolio',
            description: 'Personal website to showcase projects.',
            features: [
                'Single page application with JS React frontend',
                'Next.js framework using App Router file structure',
                'Tailwind CSS design/style framework'
            ],
            github: 'https://github.com/JordanTaylorJ/portfolio',
            images: ['./sky.jpeg']
        }
    ]

    const [show, setShow] = useState(false)
    const [selected, setSelected] = useState(null);

    const handleOpen = (e) => {
        const proj = projects.find(project => project.title === e.target.value)
        setShow(true)
        setSelected(proj)
    }

    return(
        <div id='Portfolio' className='pt-6'>
        <div className="m-16 p-6 bg-greenblue">
            <h2 className="text-center text-3xl px-4 text-white">Projects</h2>
        <div className='columns-3 m-12'>
            {projects.map(project => {
                return(
                <div key={project.title} className="max-w-sm overflow-hidden shadow-lg">
                    <img className="w-full" src={project.images[0]} alt="project image"/>
                    
                    <div className="px-6 py-4 bg-white">
                        <div className='columns-2 flex flex-wrap justify-between'>
                        <div className="font-bold text-xl mb-2 column-2 text-greenblue">{project.title}</div>
                        <a href={project.github}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                        </a>
                        </div>
                        <p>{project.description}</p>
                        <div className='flex flex-col justify-right'>
                        <button onClick={(e) => handleOpen(e)} value={project.title} className='text-brown hover:text-white hover:bg-sage p-1 hover:rounded place-self-end'>details</button>
                        </div>
                     
                    </div>
                </div>
                )
            })}
        </div>
        </div>
        <Detail isVisible={show} onClose={() => setShow(false)} thisProject={selected} />
        </div>
    )
}

export default Projects; 