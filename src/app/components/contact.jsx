const Contact = () => {
    return(
        <div id="Contact" className="grid md:grid-cols-3 items-center min-h-screen p-6 md:p-24 gap-12 lg:gap-24" >
            <div className='md:col-span-2 bg-greenblue px-10 py-14 self-center' >
                <h1 className='text-2xl md:text-3xl pb-8 text-white pl-5' >Let's Work Together!</h1>
                <p className='text-center text-sm md:text-base'>
                I'm in search of a full-stack, frontend, or backend engineering opportunity. I am also available for collaborative or freelance projects. Excited to hear from you!
                </p>
                <br></br>
                <div className='flex flex-col text-lg'>
                    <a href='https://www.linkedin.com/in/jordantjoseph/' className='text-brown hover:text-white hover:bg-sage p-1 hover:rounded place-self-end'>Let's Connect</a>
                </div>
            </div>
            <img className='object-contain w-40 sm:w-52 md:w-80 justify-self-center' src='/sunglasses.jpg' alt='sunglasses' />
        </div>
    )
}

export default Contact;