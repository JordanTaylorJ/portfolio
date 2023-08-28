const MobileMenu = ({handleClickScroll}) => {
    return(
        <div className='bg-white p-4 md:hidden justify-left ' >
            <button className='hover:text-sage block' value='Home' onClick={(e) => handleClickScroll(e)} >Home</button>
            <button className='hover:text-sage block' value='About' onClick={(e) => handleClickScroll(e)}>About</button>
            <button className='hover:text-sage block' value='Portfolio' onClick={(e) => handleClickScroll(e)}>Portfolio</button>
            <a href='./resume_jordanjoseph.pdf' download='resume_jordanjoseph'>
                <button className='hover:text-sage'>Resume</button>
            </a>
        </div>
    )
}

export default MobileMenu;