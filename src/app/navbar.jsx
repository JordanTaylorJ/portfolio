import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return(
        <div>
            <h1>links here maybe</h1>
            <Link href='/about'> About </Link>
            <Link href='/projects'>Projects</Link>
        </div>
    )
}

export default Navbar;