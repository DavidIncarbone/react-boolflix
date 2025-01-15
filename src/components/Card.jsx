
import CardStyle from "../style/Card.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
const flags = ["it", "de", "en", "fr", "es"];
import axios from "axios";

export default function Card({ title, originalTitle, language, vote, image }) {


    const flag = flags.includes(language)
        ? language + ".png"
        : "Unknown.png";

    const drawStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            //voto 1,5
            const star =
                i <= Math.ceil(vote / 2) ? (
                    <FaStar key={i} />
                ) : (
                    <FaRegStar key={i} />
                );
            stars.push(star);
        }
        return stars;
    };


    return (
        <div id="card" className={`card col-3 ${CardStyle.cardWrapper} ${CardStyle.cardEffect}`}>
            <img
                src={"https://image.tmdb.org/t/p/w342" + image}
                className={`card-img-top ${CardStyle.cardImg}`}
                alt={title || name}
            />
            <div className={`card-body ${CardStyle.cardInner}`}>
                <h4 className="card-title">{title || name}</h4>
                <h5 className="card-text">
                    {originalTitle}
                </h5>
                <div className={CardStyle.flag}>
                    <img
                        src={`/img/flags/${flag}`}
                        alt={language}
                        className="img-fluid"
                    />
                </div>
                <div className={CardStyle.cardStar}>{drawStars()}</div>
            </div>
        </div>

    )
}

{/* < div className="card d-flex col-3 bg-dark text-white" CardStyle={{ "height": "25rem" }
}>
    <img src={`https://image.tmdb.org/t/p/w342${image}`} className="card-img-top h-50" alt="..." />
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{originalTitle}</p>
        <div className="d-flex gap-1">
            <div>Voto: </div>
            <div className={CardCardStyle.cardStar}>{drawStars()}</div>
        </div>
        <div className="d-flex gap-1">
            <span>Lingua: </span> <div className={CardCardStyle.icons}>
                <img
                    src={`/img/flags/${flag}`}
                    alt={language}
                    className="img-fluid text-white"
                />
            </div>
        </div>
    </div>
</div > */}