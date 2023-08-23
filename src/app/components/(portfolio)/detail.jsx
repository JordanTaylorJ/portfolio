
const Detail = ({isVisible, onClose, thisProject}) => {
    if(!isVisible) return null;

    return(
        
        <div className=" fixed inset-0 bg-sage bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="p-5 w-2/5 shadow-lg bg-white">
            <h2 className='text-4xl' >SOMETHING HERE</h2>
    
        {thisProject.features.map(feature => {
            return(
                <ul key={feature} className="text-brown text-base list-outside list-disc">
                <li>{feature}</li>
                </ul>
            )
        })}
    
        <button onClick={() => onClose()}>close</button>
        </div> 
        </div>
        
    )
}

export default Detail;