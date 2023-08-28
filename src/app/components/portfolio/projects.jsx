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
            images: ['./ski_resort.jpg', './ski_ERD.jpg'],
            tags: ['React', 'Rails', 'Mapbox']
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
            images: ['./book_club.png'],
            tags: ['React', 'Rails', 'MUI']
        }, 
        {
            title: 'Portfolio',
            description: 'Personal website to showcase projects.',
            features: [
                'Single-page application with JS React frontend deployed through Vercel',
                'Created with Next.js, applied App Router and layouts',
                'Styled using Tailwind CSS framework'
            ],
            github: 'https://github.com/JordanTaylorJ/portfolio',
            images: ['./sky.jpeg'],
            tags: ['React', 'Next.js', 'Tailwind CSS']
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
        <div id='Portfolio' className='pt-3'>
        <div className="m-16 p-6 bg-greenblue">
            <h2 className="text-center text-2xl md:text-3xl px-4 text-white">Projects</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 m-12'>
            {projects.map(project => {
                return(
                <div key={project.title} className="max-w-sm overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={project.images[0]} alt="project image"/>
                    <div className="px-6 py-4">
                        <div className='columns-2 flex flex-wrap justify-between'>
                        <div className="font-bold text-lg md:text-xl mb-2 column-2 text-greenblue">{project.title}</div>
                        <a href={project.github} className="text-brown hover:text-greenblue">
                            <span className="sr-only">GitHub</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        </div>
                        <p className='text-brown'>{project.description}</p>
                        {project.tags.map(tag => {
                            return(
                                <span key={tag} className="text-xs font-semibold text-greenblue mr-2 mb-2">#{tag}</span>
                            )}
                        )}
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