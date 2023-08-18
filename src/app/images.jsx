const Images = () => {
    return(
        <div className=' flex flex-col p-10 columns-2'>

        <div className='p-4' >
            <img className='object-scale-down w-1/5' src='./hiking.jpeg' alt='hiking'/>
        </div>
        <div className='p-4'>
            <img className='object-scale-down w-2/5' src='./mountain.jpeg' alt='hiking'/>
            <img className='object-scale-down w-2/5' src='./plane.jpeg' alt='hiking'/>
        </div>
        </div>
    )
}

export default Images;

//<img className='object-scale-down w-full' src='./beach.jpeg' alt='hiking'/>