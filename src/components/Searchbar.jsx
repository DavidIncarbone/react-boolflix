import SearchButton from "./SearchButton";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useState } from "react";

export default function Searchbar() {

    const { handleSearch } = useGlobalContext();

    const [query, setQuery] = useState('');

    function preventDefault(event) {
        event.preventDefault();
    }

    return (
        <div className="input-group h-25 pt-2">
            <div className="form-outline" data-mdb-input-init>
                {/* Controlled element */}
                <input value={query} onChange={(e) => setQuery(e.target.value)} type="search" id="form1" className="form-control" placeholder="Cerca" />
                <label className="form-label" htmlFor="form1">Search</label>
            </div>
            <div>
                <SearchButton handleSearch={() => handleSearch(query)}

                />
            </div>

        </div>
    )
}