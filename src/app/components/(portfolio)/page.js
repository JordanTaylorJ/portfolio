import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";

const Portfolio = () => {

    return(
        <main>
        <div className='flex justify-end m-16 p-6'>
            <img className='object-scale-down w-96' src='./sunglasses.jpg' alt='sunglasses'/>
        </div>
        <Projects/> 
        <Skills/>
        <Experience/>
        </main>
    )
}

export default Portfolio;