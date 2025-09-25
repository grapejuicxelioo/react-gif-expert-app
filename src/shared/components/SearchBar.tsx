import { useState, type KeyboardEvent } from 'react'

interface Props {
    placeHolder?: string,

    onQuery: (query: string) => void;
}

export function SearchBar({ placeHolder = 'buscar', onQuery }: Props) {
    const [query, setQuery] = useState('');

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
            ></input>
            <button onClick={handleSearch} >buscar</button>
        </div>
    )
}