//import React, {useState} from 'react';
import Projects from "../../(components)/projects/page";

const Portfolio = () => {

    //const [isClicked, setIsClicked] = useState();

    return(
        <main>
        <h1>Portfolio</h1>
        <div className="p-12 columns-3">
            <div>
                <button isClicked='true'>Projects</button>
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