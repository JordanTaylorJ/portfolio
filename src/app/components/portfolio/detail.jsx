
const Detail = ({isVisible, onClose, thisProject}) => {
    if(!isVisible) return null;

    
    return(
        <div onClick={() => onClose()} className=" fixed inset-0 bg-sage bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="p-10 w-3/5 shadow-lg bg-white">
            <h2 className='text-4xl text-center pb-4 text-greenblue font-bold' >{thisProject.title}</h2>
            <p className='text-brown text-center pb-10'>{thisProject.description}</p>
            <div className='flex-col columns-2 gap-10'>
            <img className="w-full self-center" src={thisProject.images[0]} alt="project image"/>
            {thisProject.features.map(feature => {
                return(
                    <ul key={feature} className="text-brown text-base list-outside list-disc">
                    <li>{feature}</li>
                    </ul>
                )
            })}
            </div>
        </div> 
        </div>
        
    )
}

export default Detail;