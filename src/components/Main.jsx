import Card from "./Card";
import { useGlobalContext } from "../contexts/GlobalContext";

function Main() {
    const { filmsList, setFilmsList, getFilms } = useGlobalContext();
    console.log(filmsList);
    return (
        <main className="mt-5">
            <section id="movies" className="container">

                <h2 className="p-3 ">Movies</h2>

                <div id="card-container" className="d-flex container ">
                    <div className="row g-3">
                        {filmsList.map((film) => {
                            return (<Card key={crypto.randomUUID()}
                                title={film.title}
                                originalTitle={film.original_title}
                                language={film.original_language}
                                vote={film.vote_average}
                            // image={film.backdrop_path}
                            />)


                        })}


                    </div>
                </div>

            </section>

            <section id="movies" className="container pb-5">

                <h2 className="p-3 ">TV Series</h2>

                <div className="d-flex container ">
                    <div className="row g-3">
                        <Card />

                    </div>
                </div>

            </section>



        </main>
    )
}


export default Main;