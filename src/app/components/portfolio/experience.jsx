const Experience = () => {
    const list = [{
            name: 'Business Accountant - Carson Group Tax & Accounting',
            time: '03/2024 - current',
            location: "Colorado Springs, CO"
        },
        {
            name:"Student - Flatiron School",
            time:"03/2023",
            location:"Colorado Springs, CO",
        },
        {
            name:"Staff Accountant - Bradshaw & Associates, PLLC",
            time:"06/2021 - 05/2022",
            location:"Colorado Springs, CO",
        },
        {
            name:"Income Auditor - The Broadmoor",
            time:"10/2020 - 02/2021",
            location:"Colorado Springs, CO",
        },
        {
            name:"Executive Assistant - Papillon Helicopters",
            time:"10/2019 - 05/2020",
            location:"Tusayan, AZ",
        },
        {
            name:"Instructor - Avid4 Aventure",
            time:"06/2019 - 09/2019",
            location:"Burlingame, CA",
        },
        {
            name:"Student - Colorado State University",
            time:"05/2019",
            location:"Pueblo, CO",
        },
    ]
    
    return(
        <main id='Experience' className='pt-20 min-h-screen'>
        <div className='my-10 mx-0 bg-white'>
        <h2 className="text-center text-2xl md:text-3xl pt-10 px-4 text-brown">Education & Experience</h2>
        <div className='flex justify-center text-brown p-10'>
        <table className="w-full border-spacing-x-8 border-spacing-y-5">
        <tbody className='m-16 text-xs md:text-base'>
            {list.map(exp => {
                return(
                    <tr className="p-20 border border-black border-t-0 border-l-0 border-r-0">
                        <td>{exp.name}</td>
                        <td className='collapse sm:visible text-right md:text-sm'>{exp.time}</td>
                        <td className='collapse md:visible text-right'>{exp.location}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
      </div>
      </div>
      </main>
    )
}

export default Experience;