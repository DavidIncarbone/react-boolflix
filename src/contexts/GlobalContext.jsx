// IMPORT
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { DiVim } from "react-icons/di";


// VARIABLES
const GlobalContext = createContext();
const apiMovieUrl = import.meta.env.VITE_API_URL;
const apiKey = "api_key=" + import.meta.env.VITE_API_KEY;
const apiImages = import.meta.env.VITE_PATH_IMAGE;
const apiSearch = import.meta.env.VITE_API_SEARCH;

const GlobalProvider = ({ children }) => {
    // VARIABLES

    const [filmsList, setFilmsList] = useState([]);
    const [seriesList, setSeriesList] = useState([]);
    const [search, setSearch] = useState("");
    const [actorsList, setActorsList] = useState([]);

    function handleSearch(query) {
        // const searchField = document.getElementById("form1").value
        // console.log(query)

        getFilmsFiltered(query, "movie");
        getFilmsFiltered(query, "tv");
        getActors();
    }

    function getFilmsFiltered(query, type) {
        // let options = null;
        // if (search) {
        //     options = {
        //         params: { search },
        //     };
        // }

        axios.get(apiSearch + type + "?" + apiKey + "&query=" + query)
            .then((res) => {

                if (type === "movie") {

                    setFilmsList(res.data.results);
                } else {
                    setSeriesList(res.data.results);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Chiamata effettuata")
            })


    }

    const getActors = (id) => {

        axios.get(`https://api.themoviedb.org/3/movie/762509/credits?api_key=2c946a717fc5512ca93d05f5bc67d58d`).then((res) => {

            setActorsList(res.data.cast)

        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            console.log("Chiamata verso i credits effettuata")
        })

    }

    console.log(actorsList)
    const actorsName = actorsList.map((item) => (item.name))
    console.log(actorsName + "nomi")




    return (
        <GlobalContext.Provider value={{ getFilmsFiltered, filmsList, seriesList, search, setSearch, handleSearch, actorsList, setActorsList, actorsName }}>
            {children}
        </GlobalContext.Provider>
    );

}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }