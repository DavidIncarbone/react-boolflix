import Select from "./Select";
import Searchbar from "./Searchbar";
import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";

function Header() {

    const { selectedGenre, setSelectedGenre } = useGlobalContext();

    const handleSelect = (event) => {
        setSelectedGenre(event.target.value)
        setTimeout(console.log(selectedGenre), 3000);
    }

    return (
        <header className="d-flex justify-content-between pe-3">
            <h1 className="p-3">
                Boolflix
            </h1>
            <div className="d-flex align-items-center">
                <div>
                    <Select selectedValue={() => { handleSelect(event) }} />
                </div>
                <div className="d-flex align-items-center ps-3 pt-4">
                    <Searchbar className="h-25" />
                </div>
            </div>


        </header>
    )
}

export { Header }