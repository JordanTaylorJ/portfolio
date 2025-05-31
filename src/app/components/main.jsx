const Main = () => {


    return(
        <main id='Home' className="min-h-screen">
        <div className=''>
            <p className="mt-16 ml-9 p-6 text-4xl sm:text-6xl text-sage inline-block text-shadow-lg">
            Hi - Jordan here!
            </p>

            <div className="m-6">
            <label className="flex items-center justify-between bg-sage cursor-pointer relative w-64 h-10 rounded-full border-2 border-solid border-gray-300">
                <text className="p-5 text-lg text-white">Engineer </text>
                <text className="p-5 text-lg text-white"> Designer</text>
                <input type="checkbox" id='check' className="sr-only peer"/>
                <span className="w-1/2 h-4/5 bg-white opacity-40 absolute rounded-full left-1 top-1 peer-checked:bg-brown peer-checked:left-32 transition-all duration-500">
                </span>
            </label>
            </div>

        </div>
        <div className="mt-10 ">
            <img className='md:absolute top-60 left-40 object-scale-down w-4/5 md:w-3/5'  src='/blkwhi.jpg' alt="walking outside"/>
        </div> 
        </main>
    )
}

export default Main;


/*
        <div className=''>
            <p className="mt-16 ml-9 p-6 text-4xl sm:text-6xl text-sage bg-brown inline-block">
            hi - jordan here!
            </p>
        </div>
        <div className="mt-10 ">
            <img className='md:absolute top-52 left-40 object-scale-down w-4/5 md:w-3/5'  src='/blkwhi.jpg' alt="walking outside"/>
        </div>  

        class="bg-no-repeat bg-center ..." style="background-image: url(...);"



                    <img className='min-w-full' src='/blkwhi.jpg'/>
            <div className='w-full md:absolute top-32 md:top-60 lg:top-96 mt-10'>
                <h2 className='font-serif text-white text-left text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-wide indent-12'>software engineer</h2>
                <h2 className='font-serif text-white text-left text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-wide indent-11'>accountant |  pilot</h2>
                <h2 className='font-serif text-white text-left text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-wide indent-16'> artist | musician </h2>
                <br></br>
            </div>
*/