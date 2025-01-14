import SearchButton from "./SearchButton";

export default function Searchbar() {
    return (
        <div className="input-group h-25">
            <div className="form-outline" data-mdb-input-init>
                <input type="search" id="form1" className="form-control" placeholder="Cerca" />
                <label className="form-label" htmlFor="form1">Search</label>
            </div>
            <div>
                <SearchButton />
            </div>

        </div>
    )
}