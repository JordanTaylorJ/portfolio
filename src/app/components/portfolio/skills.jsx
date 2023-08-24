const Skills = () => {

    const list = [
        'JavaScript', 'React', 'Rails', 'Ruby on Rails', 'Python', 'CSS', 'HTML', 'Tailwind CSS', 'Material UI', 'Next.js','JSON', 'SQL', 'PostgreSQL', 'Postman', 
        'REST API', 'MVC Architecture', 'Wireframes', 'Excel', 'Visio', 'Tableau', 
    ]

    return(
        <div className='m-10 p-6'>
        <h2 className="text-center text-3xl px-4 text-brown">Skills</h2>
        <div className='flex justify-center m-10'>
            <ul className='p-8 bg-white shadow-lg columns-4 text-lg text-brown'>
                {list.map(item => {
                    return(<li key={item}>{item}</li>)
                })}
            </ul>
        </div>
        </div>
    )
}

export default Skills;