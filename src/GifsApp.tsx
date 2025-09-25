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
    };
    const handleSearch = (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        // const currentTerms = previousTerms.slice(0, 8);
        // currentTerms.unshift(query);

        // setPreviousTerms(currentTerms);

        setPreviousTerms([query, ...previousTerms].splice(0, 8));
    };

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
            <GifList gifs={mockGifs} />
        </>
    )
}