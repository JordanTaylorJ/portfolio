'use client'
import React, {useState} from 'react';
import MobileMenu from './mobilemenu';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav >

            <div className='fixed top-[10px] right-[100px]'>
            <button onClick={() => setIsOpen(!isOpen)} type="button" className=" p-2 w-20 h-20 text-brown hover:text-sage hover:curser-pointer">
                <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            {isOpen ? <MobileMenu/> : <></> }
            </div>
        
        </nav>
    )
}

export default Navbar;
