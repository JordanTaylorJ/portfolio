import Portfolio from './portfolio/portfolio';

const Engineer = () => {

    return(
        <>
        <main className='flex min-h-screen'>
        <img className='m-10 top-66 left-40 object-scale-down w-3/5 md:w-2/5'  src='/mountain.jpeg' alt="walking outside"/>
        </main>
        <Portfolio/>
        </>
    )
}

export default Engineer;
