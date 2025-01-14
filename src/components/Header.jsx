import Select from "./Select";
import Searchbar from "./Searchbar";

function Header() {
    return (
        <header className="d-flex justify-content-between pe-3">
            <h1 className="p-3">
                Booflix
            </h1>
            <div className="d-flex align-items-center">
                <div>
                    <Select />
                </div>
                <div className="d-flex align-items-center ps-3 pt-4">
                    <Searchbar className="h-25" />
                </div>
            </div>


        </header>
    )
}

export default Header;