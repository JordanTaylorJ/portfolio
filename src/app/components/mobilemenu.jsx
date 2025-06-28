import Link from 'next/link'
const MobileMenu = ({handleClickScroll}) => {
    return(
        <div className='bg-white bg-opacity-50 p-2 m-20 absolute justify-left ' >
            <button className='hover:text-sage block' value='Home' onClick={(e) => handleClickScroll(e)} >Home</button>
            <Link className='hover:text-sage block' href="/about">About</Link>
            <Link className='hover:text-sage block' href="/home">Home</Link>
            <button className='hover:text-sage block' value='Contact' onClick={(e) => handleClickScroll(e)}>Contact</button>
        </div>
    )
}

export default MobileMenu;