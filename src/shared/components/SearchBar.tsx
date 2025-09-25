interface Props {
    placeHolder?: string,
}

export function SearchBar({ placeHolder }: Props) {
    return (
        <div className="search-container">
            <input type="text" placeholder={placeHolder}></input>
            <button>buscar</button>
        </div>
    )
}