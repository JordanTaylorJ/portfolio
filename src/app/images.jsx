const Images = () => {
    return(
        <div className=' flex flex-col columns-2'>

        <div className='p-4' >
            <img className='object-scale-down w-2/5' src='./hiking.jpeg' alt='hiking'/>
        </div>
        <div className='flex justify-end bg-brown'>
            <img className='object-scale-down w-80' src='./mountain.jpeg' alt='hiking'/>
            <img className='object-scale-down w-80' src='./plane.jpeg' alt='hiking'/>
        </div>
        </div>
    )
}

export default Images;