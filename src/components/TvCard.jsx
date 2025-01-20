
import CardStyle from "../style/Card.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useState } from "react";
const flags = ["it", "de", "en", "fr", "es"];


export default function TvCard({ title, originalTitle, language, vote, image, id }) {

    const { actorsName } = useGlobalContext();
    const [actors, setActors] = useState([]);




    const flag = flags.includes(language)
        ? language + ".png"
        : "Unknown.png";

    const drawStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {

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
        <div id="card" key={id} className={`card col-3 ${CardStyle.cardWrapper} ${CardStyle.cardEffect}`}>
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

