const Images = () => {
    return(
        <div className=''>
        <div class="grid grid-rows-3 grid-flow-col gap-24 p-24">
            
            <div class="col-span-2 self-center h-60">
                <img className='object-scale-down' src='./hiking.jpeg' alt='hiking'/>
            </div>
            <div class="row-span-2 col-span-2">
                <img className='object-scale-down' src='./beach.jpeg' alt='beach'/>
            </div>
            <div class="row-span-3 ">
                <p className='bg-white p-10 h-72'>words in here for awhile typing on the page la la la</p>
            </div>
        </div>

        <div className='flex justify-end bg-brown'>
            <img className='object-scale-down w-60' src='./mountain.jpeg' alt='hikingVista'/>
            <img className='object-scale-down w-60' src='./plane.jpeg' alt='airplane'/>
        </div>
        </div>
    )
}

export default Images;

/*
            <div>
            
                
                <img className='object-scale-down w-2/5' src='./shavano.jpeg' alt='mtnPeak'/>
            </div>
            */