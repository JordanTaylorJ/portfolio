
import Design from './design';
import Engineer from './engineer.jsx';

const Main = ({handleToggle, isToggled}) => {


    return(
        <main id='Home'>
        <div className='absolute'>
            <p className="mt-16 ml-9 p-6 text-5xl  sm:text-6xl md:text-9xl tracking-wide text-sage inline-block text-shadow-lg font-nanum-myeongjo-regular">
            Welcome
            </p>
            <div className="m-4">
            <label className="flex items-center justify-between bg-sage cursor-pointer relative w-60 h-8 rounded-full border-2 border-solid border-gray-300">
                <text className="p-5 text-lg text-brown">Engineer </text>
                <text className="p-5 text-lg text-white"> Designer</text>
                <input type="checkbox" id='check' className="sr-only peer" onClick={handleToggle}/>
                <span className="w-1/2 h-4/5 bg-white opacity-40 absolute rounded-full left-1 top-1 peer-checked:bg-brown peer-checked:left-28 transition-all duration-500">
                </span>
            </label>
            </div>
        </div>
 
        
        
        {isToggled ? 
        <Design handleToggle={handleToggle} />
        :
        <Engineer handleToggle={handleToggle} />
        }
        </main>
    )
}

export default Main;
