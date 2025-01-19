import { useGlobalContext } from "../contexts/GlobalContext";

const ActorsName = () => {
    const { actorsList } = useGlobalContext();

    return (

        actorsList.slice(0, 5).map((item) =>

            <li key={crypto.randomUUID()}>{item.name}</li>

        )
    )

}

export { ActorsName };