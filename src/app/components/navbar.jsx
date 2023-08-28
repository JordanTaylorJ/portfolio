'use client'
import React, {useState} from 'react';
import MobileMenu from './mobilemenu';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const handleClickScroll = (e) => {
        setIsOpen(false)
        const element = document.getElementById(e.target.value);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return(
        <nav className='container fixed z-40'>
        <div className='flex flex-wrap justify-end p-4 text-lg' >
            
            <div className='hidden w-full md:block md:w-auto space-x-10' >
                <button className='hover:text-sage' value='Home' onClick={(e) => handleClickScroll(e)} >Home</button>
                <button className='hover:text-sage' value='About' onClick={(e) => handleClickScroll(e)}>About</button>
                <button className='hover:text-sage' value='Portfolio' onClick={(e) => handleClickScroll(e)}>Portfolio</button>
                <a href='./resume_jordanjoseph.pdf' download='resume_jordanjoseph'>
                    <button className='hover:text-sage'>Resume</button>
                </a>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} type="button" className="flex justify-end p-2 w-10 h-10 hover:text-sage md:hidden">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            {isOpen ? <MobileMenu handleClickScroll={handleClickScroll}/> : <></> }
        </div>
        </nav>
    )
}

export default Navbar;

//className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 text-lg columns-2"
