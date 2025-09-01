'use client'
import React, {useState} from 'react';
import Main from './components/main';

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
