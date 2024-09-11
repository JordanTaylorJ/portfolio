const Playlist = () => {
    return(
        <main>
            <div className=' m-6 lg:m-16 p-6 lg:p-20 bg-greenblue h-auto shadow-lg'>
                <iframe 
                    className='w-full h-96 shadow-lg'
                    thumbnails="true&disableAnalytics=true" 
                    allowfullscreen="allowfullscreen"
                    allow="encrypted-media"
                    src="https://embed.tidal.com/playlists/ef61a68b-f5d5-4514-9927-1aa4241dd01b?"
                >
                </iframe>
            </div>
        </main>
    )   
}

export default Playlist;