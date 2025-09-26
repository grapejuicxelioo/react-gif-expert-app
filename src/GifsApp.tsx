import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

export function GifsApp() {
    const {gifs, handleTermClicked, handleSearch, previousTerms} = useGifs();

    return (
        <>
            {/* header */}
            <CustomHeader title='buscador de gifs' description='descubre y comparte el Gif perfecto' />

            {/* search */}
            <SearchBar placeHolder="buscar" onQuery={handleSearch} />

            {/* busquedas previas */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />

            {/* gifs */}
            <GifList gifs={gifs} />
        </>
    )
}