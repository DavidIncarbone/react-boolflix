import Card from "./Card"

function Main() {
    return (
        <main className="mt-5">
            <section id="movies" className="container">

                <h2>Movies</h2>

                <div className="d-flex container ">
                    <div className="row col-3 p-3">

                        <Card />

                    </div>
                </div>

            </section>

            <section id="TV-series" className="container">
                <h2>TV Series</h2>

                <div className="d-flex container ">
                    <div className="row col-3 p-3">

                        <Card />

                    </div>
                </div>

            </section>


        </main>
    )
}


export default Main;