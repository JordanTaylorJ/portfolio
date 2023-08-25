const Contact = () => {
    return(
        <div className="container flex min-h-screen p-24 gap-24 column-2" >
            <div className='bg-greenblue px-10 py-14 self-center' >
                <h1 className='text-3xl pb-8 text-white pl-5' >Let's Work Together!</h1>
                <p className='text-center'>
                I'm in search of a full-stack, frontend, or backend programming opportunity. I'm open to collaborative projects and excited to hear from you!
                </p>
                <br></br>
                <div className='flex flex-col text-lg'>
                    <a href='https://www.linkedin.com/in/jordantjoseph/' className='text-brown hover:text-white hover:bg-sage p-1 hover:rounded place-self-end'>Let's Connect</a>
                </div>
            </div>
            <img className='object-contain w-80 ' src='/sunglasses.jpg' alt='sunglasses' />
        </div>
    )
}

export default Contact;