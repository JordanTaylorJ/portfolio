const Experience = () => {
    return(
        <div className='my-10 mx-0 bg-sage'>
        <h2 className="text-center text-2xl md:text-3xl py-2 px-4 text-white">Education & Experience</h2>
        <div className='flex justify-center text-white'>
        <table className="table-auto border-separate border-spacing-x-8 border-spacing-y-5">
        <tbody className='text-xs md:text-base'>
            <tr className="border-b">
                <td>Business Accountant - Carson Group Tax & Accounting</td>
                <td className='collapse sm:visible text-right md:text-sm'>03/2024 - current</td>
                <td className='collapse md:visible text-right'>Colorado Springs, CO</td>
            </tr>
            <tr className="border-b">
                <td>Student - Flatiron School</td>
                <td className='collapse sm:visible text-right md:text-sm'>03/2023</td>
                <td className='collapse md:visible text-right'>Colorado Springs, CO</td>
            </tr>
            <tr className="border-b">
                <td>Staff Accountant - Bradshaw & Associates, PLLC</td>
                <td className='collapse sm:visible text-right md:text-sm'>06/2021 - 05/2022</td>
                <td className='collapse md:visible text-right'>Colorado Springs, CO</td>
            </tr>
            <tr className="border-b">
                <td>Income Auditor - The Broadmoor</td>
                <td className='collapse sm:visible text-right md:text-sm'>10/2020 - 02/2021</td>
                <td className='collapse md:visible text-right'>Colorado Springs, CO</td>
            </tr>
            <tr className="border-b">
                <td>Executive Assistant - Papillon Helicopters</td>
                <td className='collapse sm:visible text-right md:text-sm'>10/2019 - 05/2020</td>
                <td className='collapse md:visible text-right'>Tusayan, AZ</td>
            </tr>
            <tr className="border-b">
                <td>Instructor - Avid4 Aventure</td>
                <td className='collapse sm:visible text-right md:text-sm'>06/2019 - 09/2019</td>
                <td className='collapse md:visible text-right'>Burlingame, CA</td>
            </tr>
            <tr>
                <td>Student - Colorado State University</td>
                <td className='collapse sm:visible text-right md:text-sm'>05/2019</td>
                <td className='collapse md:visible text-right'>Pueblo, CO</td>
            </tr>
        </tbody>
      </table>
      </div>
      </div>
    )
}

export default Experience;