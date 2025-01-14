// IMPORT
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";


// VARIABLES
const GlobalContext = createContext();
const apiMovieUrl = import.meta.env.VITE_API_URL;
const apiKey = "api_key=" + import.meta.env.VITE_API_KEY;
const apiImage = import.meta.env.VITE_PATH_IMAGE;
const apiSearch = import.meta.env.VITE_API_SEARCH;

const GlobalProvider = ({ children }) => {
    // VARIABLES

    const [filmsList, setFilmsList] = useState([]);
    const [search, setSearch] = useState("");

    // FUNCTIONS

    // useEffect(() => {

    //     getFilms()
    // }, []);

    function getFilms() {
        axios.get(apiMovieUrl + "discover/movie?" + apiKey).then((res) => {
            console.log(res.data);
            setFilmsList(res.data.results)

        }).catch((error) => {
            console.log(error);
        })
            .finally(() => {
                console.log("Chiamata effettuata")
            });
    }

    function handleSearch(query) {
        // const searchField = document.getElementById("form1").value
        // console.log(query)

        getFilmsFiltered(query);
    }

    function getFilmsFiltered(query) {
        // let options = null;
        // if (search) {
        //     options = {
        //         params: { search },
        //     };
        // }

        axios.get(apiSearch + "?" + apiKey + "&query=" + query)
            .then((res) => {
                // console.log(res.data.results)
                // const filmFiltered = res.data.results
                // filmFiltered.map((film) => film.title.includes(search))
                setFilmsList(res.data.results)

            }).catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Chiamata effettuata")
            })

    }

    return (
        <GlobalContext.Provider value={{ getFilms, getFilmsFiltered, filmsList, setFilmsList, search, setSearch, handleSearch }}>
            {children}
        </GlobalContext.Provider>
    );

}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }