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
            ]
        }, 
        {
            name: 'Book Club',
            description: 'A community space to share and discuss favorite books.',
            features: [
                'Full stack application with JS React frontend, MUI style components, and Rails API backend',
                'Features user authentication/authorization utilizing session cookies middleware',
                'Demonstrates MVC architecture and the use of Active Record for Object-Relational Mapping'
            ]
        }, 
        {
            name: 'Portfolio',
            description: 'Personal website to showcase projects.',
            features: [
                'application with Next.js React and Tailwind CSS styling',
                'Features ....'
            ]
        }
    ]

    return(
        <div >
            {projects.map(project => {
                return(
                <div className='columns-3'>
                <h1>{project.name}</h1>
                {project.features.map(feature => {
                    return(<li>{feature}</li>)
                })}
                </div>
                )
            })}
        </div>

    )
}

export default Projects; 