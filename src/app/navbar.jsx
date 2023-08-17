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
        <nav className='container fixed'>
        <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 text-lg columns-2" >
            <div> 
            </div>
            <div className='space-x-10 ml-10' >
                <button value='Home' onClick={(e) => handleClickScroll(e)} >Home</button>
                <button value='About' onClick={(e) => handleClickScroll(e)}>About</button>
                <button value='Portfolio' onClick={(e) => handleClickScroll(e)}>Portfolio</button>
                <button value='Contact' onClick={(e) => handleClickScroll(e)}>Contact</button>
                <a href='./resume_jordanjoseph.pdf' download='resume_jordanjoseph'>
                    <button>Resume</button>
                </a>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;