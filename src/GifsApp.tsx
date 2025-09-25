import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { useState } from 'react'

export function GifsApp() {
    const [previousTerms, setPreviousTerms] = useState(['']);

    const handleTermClicked = (term: string) => {
        console.log({ term })

    }

    return (
        <>
            {/* header */}
            <CustomHeader title='buscador de gifs' description='descubre y comparte el Gif perfecto' />

            {/* search */}
            <SearchBar placeHolder="buscar" />

            {/* busquedas previas */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />

            {/* gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}