

const flags = ["it", "de", "en", "fr", "es"];

export default function Card({ title, originalTitle, language, vote }) {


    const flag = flags.includes(language);

    // function drawStars() {

    //     let stars = [];
    //     for (let i = 1; i <= 5; i++) {
    //         const star =
    //             i <= Math.ceil(vote / 2) ? (<FaStar key={i} />) : <FaRegStar key={i} />;
    //         stars.push(star);
    //     }
    // }

    return (
        < div className="card d-flex col-3 bg-dark text-white" style={{ "height": "25rem" }
        }>
            <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top h-50" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{originalTitle}</p>
                <div className="d-flex justify-content-around">
                    <div>Voto: {vote}</div>
                    <div>Lingua: {language}</div>
                </div>

            </div>
        </div >
    )
}