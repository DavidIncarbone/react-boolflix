import Card from "./Card"

function Main() {
    return (
        <main className="mt-5">
            <section id="movies" className="container">

                <h2 className="p-3 ">Movies</h2>

                <div className="d-flex container ">
                    <div className="row g-3">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </section>

            <section id="movies" className="container">

                <h2 className="p-3 ">Movies</h2>

                <div className="d-flex container ">
                    <div className="row g-3">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </section>



        </main>
    )
}


export default Main;