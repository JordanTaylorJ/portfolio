import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return(
        <nav className='container fixed'>
        <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto p-4 text-lg columns-2" >
            <div> 
            </div>
            <div className='space-x-10 ml-10' >
                <Link href='/'>Home</Link>
                <Link href='/about'> About </Link>
                <Link href='/portfolio'>Portfolio</Link>
                <button>Contact</button>
                <button>Resume</button>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;