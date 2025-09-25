import { useEffect, useState, type KeyboardEvent } from 'react'

interface Props {
    placeHolder?: string,

    onQuery: (query: string) => void;
}

export function SearchBar({ placeHolder = 'buscar', onQuery }: Props) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [query, onQuery])

    const handleSearch = () => {
        onQuery(query);
        setQuery('');
    };
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeHolder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch} >buscar</button>
        </div>
    )
}