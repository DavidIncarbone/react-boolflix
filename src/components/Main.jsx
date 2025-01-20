import MoviesCard from "./MoviesCard";
import TvCard from "./TvCard";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useState } from "react";


function Main() {
    const { filmsList, seriesList } = useGlobalContext();
    const [genresID, setGenresID] = useState([]);

    {
        if (filmsList.length < 1) {
            return (<h4 id="info-page" className="text-center text-white">Cerca i tuoi Films preferiti!</h4>)
        } else {
            return (

                <main className="mt-5 container-fluid">
                    <section id="movies" className=" py-5">

                        <h2 className="p-3 text-center">Films</h2>

                        <div className=" container">
                            <div className="row g-3 ">
                                {filmsList.map((film) => {
                                    return (<MoviesCard key={crypto.randomUUID()}
                                        title={film.title}
                                        originalTitle={film.original_title}
                                        language={film.original_language}
                                        vote={film.vote_average}
                                        image={film.poster_path}
                                        id={film.id}
                                        genreID={film.genre_ids}


                                    />)
                                })}

                            </div>
                        </div>

                    </section>



                    <section id="movies" className=" pb-5">

                        <h2 className="p-3 text-center">TV Series</h2>

                        <div className="d-flex container">
                            <div className="row g-3 d-flex justify-content-center">

                                {seriesList.map((tv) => {
                                    return (<TvCard key={crypto.randomUUID()}
                                        title={tv.name}
                                        originalTitle={tv.original_title}
                                        language={tv.original_language}
                                        vote={tv.vote_average}
                                        image={tv.poster_path}
                                        id={tv.id}
                                        genreID={tv.genre_ids}

                                    />)
                                })}


                            </div>
                        </div>

                    </section>


                </main>
            )
        }
    }
}


export default Main;