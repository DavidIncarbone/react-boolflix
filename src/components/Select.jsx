import { useState, useEffect } from "react";
import axios from "axios";

export default function Select({ selectedValue }) {
    const [genres, setGenres] = useState([]);


    const getGenres = () => {

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=2c946a717fc5512ca93d05f5bc67d58d`).then((res) => {
            setGenres(res.data.genres)
        }).catch((error) => {
            console.log(error);
        })

    }

    useEffect(() => {
        getGenres()
    }, [])


    return (

        <select className="form-select h-25" aria-label="Genre select" onChange={selectedValue}>
            <option defaultValue >Scegli la categoria</option>
            {genres.map((genre) => {

                return (
                    <option key={genre.id} value={genre.name}>{genre.name}</option>
                )
            }


            )}

        </select>
    )
}