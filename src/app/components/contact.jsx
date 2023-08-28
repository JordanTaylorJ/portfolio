const Contact = () => {
    return(
        <div className="grid md:grid-cols-3 items-center min-h-screen p-24 gap-12 lg:gap-24" >
            <div className='md:col-span-2 bg-greenblue px-10 py-14 self-center' >
                <h1 className='text-2xl md:text-3xl pb-8 text-white pl-5' >Let's Work Together!</h1>
                <p className='text-center'>
                I'm in search of a full-stack, frontend, or backend programming opportunity. I'm open to collaborative projects and excited to hear from you!
                </p>
                <br></br>
                <div className='flex flex-col text-lg'>
                    <a href='https://www.linkedin.com/in/jordantjoseph/' className='text-brown hover:text-white hover:bg-sage p-1 hover:rounded place-self-end'>Let's Connect</a>
                </div>
            </div>
            <img className='object-contain w-80 justify-self-center' src='/sunglasses.jpg' alt='sunglasses' />
        </div>
    )
}

export default Contact;