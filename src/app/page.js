'use client'
import React, {useState} from 'react';
import Main from './components/page';
import About from "./about/page";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {

  const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled)
    }

  return (
    <div className={`min-h-screen ${isToggled ? '' : 'engineerBackdrop'}`}>
    <Main handleToggle={handleToggle} isToggled={isToggled}/>

    </div>
  )
}
