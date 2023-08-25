'use client'
import React from 'react';

const Navbar = () => {

    
    const handleClickScroll = (e) => {
        const element = document.getElementById(e.target.value);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <nav className='container fixed z-40'>
        <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 text-lg columns-2" >
            <div> 
            </div>
            <div className='space-x-10 ml-10 ' >
                <button className='hover:text-sage' value='Home' onClick={(e) => handleClickScroll(e)} >Home</button>
                <button className='hover:text-sage' value='About' onClick={(e) => handleClickScroll(e)}>About</button>
                <button className='hover:text-sage' value='Portfolio' onClick={(e) => handleClickScroll(e)}>Portfolio</button>
                
                <a href='./resume_jordanjoseph.pdf' download='resume_jordanjoseph'>
                    <button className='hover:text-sage'>Resume</button>
                </a>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;