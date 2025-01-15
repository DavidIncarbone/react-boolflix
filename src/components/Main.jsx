import Card from "./Card";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useState } from "react";
import axios from "axios";

function Main() {
    const { filmsList, seriesList } = useGlobalContext();

    console.log(filmsList, seriesList);
    {
        if (filmsList.length < 1) {
            return (<h4 id="info-page" className="text-center text-white">Cerca i tuoi Films preferiti!</h4>)
        } else {
            return (
                <main className="mt-5">
                    <section id="movies">
                        <h2 className="text-center">Movies</h2>
                        <div id="card-container" className="d-flex container ">
                            <div className="row gap-3 d-flex justify-content-center">
                                {filmsList.map((film) => {
                                    return (<Card key={crypto.randomUUID()}
                                        title={film.title}
                                        originalTitle={film.original_title}
                                        language={film.original_language}
                                        vote={film.vote_average}
                                        image={film.backdrop_path}

                                    />)
                                })}
                            </div>
                        </div>

                    </section>

                    <section id="movies" className=" pb-5">

                        <h2 className="p-3 text-center">TV Series</h2>

                        <div className="d-flex container">
                            <div className="row gap-3 d-flex justify-content-center">

                                {seriesList.map((film) => {
                                    return (<Card key={crypto.randomUUID()}
                                        title={film.name}
                                        originalTitle={film.original_title}
                                        language={film.original_language}
                                        vote={film.vote_average}
                                        image={film.backdrop_path}
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