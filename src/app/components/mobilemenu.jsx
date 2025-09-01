import Link from 'next/link'
const MobileMenu = () => {
    return(
        <main className='min-h-screen bg-black bg-opacity-10' >
        <div className='flex justify-items-center items-center block'>
            <Link className='hover:text-sage block' href="/">Home</Link>
            <Link className='hover:text-sage block' href="/about">About</Link>
            <Link className='hover:text-sage block' href="/contact">Connect</Link>
        </div>
        </main>
    )
}

export default MobileMenu;

