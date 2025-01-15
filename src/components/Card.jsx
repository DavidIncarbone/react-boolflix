export default function Card({ title, originalTitle, language, vote }) {

    return (
        <div className="card d-flex col-3" style={{ "height": "25rem" }}>
            <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{originalTitle}</p>
                <div className="d-flex justify-content-around">
                    <div>Voto:{vote}</div>
                    <div>Lingua:{language}</div>
                </div>

            </div>
        </div>
    )
}