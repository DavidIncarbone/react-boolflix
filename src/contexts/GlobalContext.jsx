// IMPORT
import axios from "axios";
import { createContext, useContext, useState } from "react";



// VARIABLES
const GlobalContext = createContext();
const apiKey = "api_key=" + import.meta.env.VITE_API_KEY;
const apiSearch = import.meta.env.VITE_API_SEARCH;

const GlobalProvider = ({ children }) => {
    // VARIABLES

    const [filmsList, setFilmsList] = useState([]);
    const [seriesList, setSeriesList] = useState([]);
    const [search, setSearch] = useState("");


    function handleSearch(query) {

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


    console.log(filmsList)
    console.log(seriesList)

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