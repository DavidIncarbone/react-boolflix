export default function Card({ title }) {

    return (
        <div id="card" className="d-flex col-3 flex-wrap ">

            <h5>{title}</h5>

            <img src={"https://picsum.photos/id/237/200/300"} alt="random" />


        </div>
    )
}