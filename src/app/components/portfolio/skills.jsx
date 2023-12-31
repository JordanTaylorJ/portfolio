const Skills = () => {

    const list = [
        'JavaScript', 'React', 'Ruby', 'Ruby on Rails', 'Python', 'CSS', 'HTML', 'Tailwind CSS', 'Material UI', 'Next.js','JSON', 'SQL', 'PostgreSQL', 'Postman', 
        'REST API', 'MVC Architecture', 'Wireframes', 'Excel', 'Visio', 'Tableau', 
    ]

    return(
        <div className='m-10 p-6'>
        <h2 className="text-center text-2xl md:text-3xl px-4 text-brown">Skills</h2>
        <div className='flex justify-center m-10'>
            <ul className=' grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 bg-white shadow-lg text-sm md:text-base lg:text-lg  text-brown'>
                {list.map(item => {
                    return(<li key={item}>{item}</li>)
                })}
            </ul>
        </div>
        </div>
    )
}

export default Skills;