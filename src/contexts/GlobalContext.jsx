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

    useEffect(() => {

        getFilms()
    }, []);

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

    return (
        <GlobalContext.Provider value={{ getFilms, filmsList, setFilmsList, search, setSearch }}>
            {children}
        </GlobalContext.Provider>
    );

}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }