import { mockGifs } from './mock-data/Gifs.mock'

export function GifsApp() {
    
    return (
        <>
            {/* header */}
            <div className="content-center">
                <h1>Buscador de gifs</h1>
                <p>descubre y comparte el gif perfecto</p>
            </div>

            {/* search */}
            <div className="search-container">
                <input type="text" placeholder="buscar gifs"></input>
                <button>buscar</button>
            </div>

            {/* busquedas previas */}
            <div className="previous-searches">
                <h2>busquedas previas</h2>
                <ul className="previous-seraches-list">
                    <li>Goku</li>
                    <li>Saitama</li>
                    <li>Elden Ring</li>
                </ul>
            </div>

            {/* gifs */}
            <div className="gifs-container">
                {mockGifs.map( gif => (
                    <div className="gif-card">
                        <img src={gif.url} alt={gif.title}></img>
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width} x {gif.height} (1.3mb)
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}