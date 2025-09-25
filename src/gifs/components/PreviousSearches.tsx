interface Props {
    searches: string[];
}

export function PreviousSearches({ searches }: Props) {
    return (
        <div className="previous-searches">
            <h2>busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map(term => (
                    <li key={term}>{term}</li>
                ))}
            </ul>
        </div>
    )
}