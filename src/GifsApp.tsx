import { useState } from 'react'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifList } from './gifs/components/GifList'
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action'
import type { Gif } from './gifs/interfaces/gif.interface'

export function GifsApp() {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({ term })
    };
    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        // const currentTerms = previousTerms.slice(0, 8);
        // currentTerms.unshift(query);

        // setPreviousTerms(currentTerms);

        setPreviousTerms([query, ...previousTerms].splice(0, 8));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);
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
            <GifList gifs={gifs} />
        </>
    )
}