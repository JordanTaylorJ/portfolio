const Images = () => {
    return(
        <div>
        <div className='p-12 columns-2' >
            <img className='object-scale-down w-2/5' src='./hiking.jpeg' alt='hiking'/>
            <div>
                <img className='object-scale-down w-2/5' src='./beach.jpeg' alt='hiking'/>
                <img className='object-scale-down w-2/5' src='./shavano.jpeg' alt='hiking'/>
            </div>
        </div>
        <div className='flex justify-end bg-brown'>
            <img className='object-scale-down w-60' src='./mountain.jpeg' alt='hiking'/>
            <img className='object-scale-down w-60' src='./plane.jpeg' alt='hiking'/>
        </div>
        </div>
    )
}

export default Images;