import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'

export function GifsApp() {
    
    return (
        <>
            {/* header */}
            <CustomHeader title='buscador de gifs' description='descubre y comparte el Gif perfecto' />

            {/* search */}
            <SearchBar placeHolder="buscar" />

            {/* busquedas previas */}
            <PreviousSearches searches={['saitama', 'goku']} />

            {/* gifs */}
            <GifList gifs={mockGifs}/>
        </>
    )
}