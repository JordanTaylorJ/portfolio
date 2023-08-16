import Projects from "./projects";

const Portfolio = () => {


    return(
        <main>
        <div className="p-12 columns-3 text-3xl justify-center">
            <div>
                <button>Projects</button>
            </div>
            <div>
                <button>Skills</button>
            </div>
            <div>
                <button>Education & Experience</button>
            </div>
        </div>
        <Projects/>
        </main>
    )
}

export default Portfolio;