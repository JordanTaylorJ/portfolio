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
        <nav className='p-2 text-lg container fixed z-40 md:bg-white md:bg-opacity-50'>
            <div className='flex flex-nowrap justify-center invisible md:visible min-w-screen space-x-10 md:space-x-16 lg:space-x-20'>
                <button className='hover:text-sage' value='Home' onClick={(e) => handleClickScroll(e)} >Home</button>
                <button className='hover:text-sage' value='About' onClick={(e) => handleClickScroll(e)}>About</button>
                <button className='hover:text-sage' value='Skills' onClick={(e) => handleClickScroll(e)}>Expertise</button>
                <button className='hover:text-sage' value='Portfolio' onClick={(e) => handleClickScroll(e)}>Portfolio</button>
                <button className='hover:text-sage' value='Experience' onClick={(e) => handleClickScroll(e)}>Experience</button>
                <button className='hover:text-sage' value='Contact' onClick={(e) => handleClickScroll(e)}>Contact</button>
            </div>
            <div className=''>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className=" p-2 w-10 h-10 text-brown hover:text-sage md:hidden">
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
//flex flex-nowrap justify-center
