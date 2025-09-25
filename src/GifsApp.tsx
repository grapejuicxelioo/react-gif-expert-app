import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'

export function GifsApp() {
    
    return (
        <>
            {/* header */}
            <CustomHeader title='buscador de gifs' description='descubre y comparte el Gif perfecto' />

            {/* search */}
            <SearchBar placeHolder="buscar" />

            {/* busquedas previas */}
            <PreviousSearches />

            {/* gifs */}
            <div className="gifs-container">
                {mockGifs.map( gif => (
                    <div className="gif-card">
                        <img src={gif.url} alt={gif.title}></img>
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} x {gif.height} (1.3mb)
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}