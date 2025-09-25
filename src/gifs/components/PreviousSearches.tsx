interface Props {
    searches: string[];

    onLabelClicked: (term: string) => void;
}

export function PreviousSearches({ searches, onLabelClicked }: Props) {
    return (
        <div className="previous-searches">
            <h2>busquedas previas</h2>
            <ul className="previous-searches-list">
                {searches.map(term => (
                    <li key={term} onClick={() => onLabelClicked(term)}>{term}</li>
                ))}
            </ul>
        </div>
    )
}