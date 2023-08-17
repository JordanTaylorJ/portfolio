const Skills = () => {

    const list = [
        'JavaScript', 'Rails', 'Ruby on Rails', 'React', 'CSS', 'HTML', 'Tailwind CSS', 'Material UI', 'Next.js','JSON', 'SQL', 'PostgreSQL', 'Postman', 
        'REST API', 'MVC Architecture', 'Wireframes', 'Excel', 'Visio', 'Tableau', 
    ]
    return(
        <>
        
        <div className=' flex justify-center m-10'>
        
        <ul className=' p-8 bg-white columns-4 text-lg text-brown'>
            {list.map(item => {
                return(<li key={item}>{item}</li>)
            })}
        </ul>
        </div>
        </>
    )
}

export default Skills;