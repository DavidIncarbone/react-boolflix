

export default function SearchButton({ handleSearch }) {
    return (<button onClick={handleSearch} type="button" className="btn bg-danger  ms-1 " data-mdb-ripple-init>
        <i className="fas fa-search text-white">Cerca</i>
    </button>)
}