// IMPORT
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";


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





    function handleSearch(query) {
        // const searchField = document.getElementById("form1").value
        // console.log(query)

        getFilmsFiltered(query, "movie");
        getFilmsFiltered(query, "tv");
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

    return (
        <GlobalContext.Provider value={{ getFilmsFiltered, filmsList, seriesList, search, setSearch, handleSearch }}>
            {children}
        </GlobalContext.Provider>
    );

}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext }