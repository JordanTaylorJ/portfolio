const MobileMenu = ({handleClickScroll}) => {
    return(
        <div className='bg-white bg-opacity-50 p-4 md:hidden justify-left ' >
            <button className='hover:text-sage block' value='Home' onClick={(e) => handleClickScroll(e)} >Home</button>
            <button className='hover:text-sage block' value='About' onClick={(e) => handleClickScroll(e)}>About</button>
            <button className='hover:text-sage block' value='Skills' onClick={(e) => handleClickScroll(e)}>Expertise</button>
            <button className='hover:text-sage block' value='Portfolio' onClick={(e) => handleClickScroll(e)}>Portfolio</button>
            <button className='hover:text-sage block' value='Experience' onClick={(e) => handleClickScroll(e)}>Experience</button>
            <button className='hover:text-sage block' value='Contact' onClick={(e) => handleClickScroll(e)}>Contact</button>
        </div>
    )
}

export default MobileMenu;