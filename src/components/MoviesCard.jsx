
import CardStyle from "../style/Card.module.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useGlobalContext } from "../contexts/GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";
const flags = ["it", "de", "en", "fr", "es"];


export default function Card({ title, originalTitle, language, vote, image, id, genreID }) {

    const [genres, setGenres] = useState([]);
    const [actors, setActors] = useState([]);
    const { selectedGenre } = useGlobalContext();


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

    const getActors = () => {

        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=2c946a717fc5512ca93d05f5bc67d58d`).then((res) => {
            setActors(res.data.cast);
        }).catch((error) => {
            console.log(error);
        })

    }

    const getGenres = () => {

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=2c946a717fc5512ca93d05f5bc67d58d`).then((res) => {
            setGenres(res.data.genres)
        }).catch((error) => {
            console.log(error);
        })

    }

    useEffect(() => {
        getActors();
        getGenres();

    }, [id])



    const singleGenres = []
    genres.map((genre) => {
        if (genreID.includes(genre.id)) {
            singleGenres.push(genre.name)
            return (singleGenres)
        }
    })
    if (singleGenres.includes(selectedGenre) || !selectedGenre || selectedGenre === "Scegli la categoria") {


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
                    <h5 className="text-center p-3">Actors</h5>
                    <ul>
                        {actors.slice(0, 5).map((actor) =>
                            <li className="text-white" key={crypto.randomUUID()}>{actor.name}</li>
                        )}
                    </ul>
                    <h5 className="text-center p-3">Genere</h5>
                    <ul className="w-100 d-flex flex-wrap gap-3 justify-content-around list-unstyled">
                        {genres.map((genre) => {
                            if (genreID.includes(genre.id)) {
                                return (<li key={genre.id}>{genre.name}</li>)
                            }
                        })}
                    </ul>

                </div>
            </div >




        )






    }



}

