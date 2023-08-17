const Projects = () => {

    const projects = [
        {
            name: 'Ski Resorts', 
            description: 'Organize your ski trips with this interactive map featuring resort details, in-app bookmarking tools, and user reviews.',
            features: [
                'Developed RESTful full stack application deployed through Render ', 
                'Utilized JS React frontend with MUI style components and a Rails API backend',
                'User authentication/authorization with bcrypt gem and session cookies middleware',
                'Leveraged Mapbox interactive map',
                'Implemented useContext to globally manage state'
            ],
            github:'https://github.com/JordanTaylorJ/ski_maps',
            images: './ski_resort.jpg'
        }, 
        {
            name: 'Book Club',
            description: 'A community space to share and discuss favorite books.',
            features: [
                'Full stack application with JS React frontend, MUI style components, and Rails API backend',
                'Features user authentication/authorization utilizing session cookies middleware',
                'Demonstrates MVC architecture and the use of Active Record for Object-Relational Mapping'
            ],
            github: 'https://github.com/JordanTaylorJ/book_club',
            images: './book_club.png'
        }, 
        {
            name: 'Portfolio',
            description: 'Personal website to showcase projects.',
            features: [
                'application with Next.js React and Tailwind CSS',
                'Features ....'
            ],
            github: 'https://github.com/JordanTaylorJ/portfolio',
            images: './ski_ERD.jpg'
        }
    ]

    return(
        <>
        <div className='columns-3 m-12'>
            {projects.map(project => {
                return(
                <div key={project.name} className="max-w-sm overflow-hidden shadow-lg">
                    <img className="w-full" src={project.images} alt="project image"/>
                    
                    <div className="px-6 py-4 bg-white">
                        <div className="font-bold text-xl mb-2 column-2 text-greenblue">{project.name}</div>
                        <a href={project.github}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                        </svg>
                        </a>

                        {project.features.map(feature => {
                            return(
                                <ul key={feature} className="text-brown text-base list-outside list-disc">
                                <li>{feature}</li>
                                </ul>
                            )
                        })}                    
                    </div>
                </div>
                )
            })}
        </div>
    
      </>
    )
}

export default Projects; 

/*
<div className='columns-3'>
    <h1>{project.name}</h1>
    {project.features.map(feature => {
        return(<li>{feature}</li>)
    })}
</div>

                   <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
*/