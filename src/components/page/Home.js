import SimpleButton from "../SimpleButton";
import "../../assets/Home.css";

const Home = () => {
    const prenom = "romain";

    return (
        <div>
            <p>{prenom}</p>
            <SimpleButton />
        </div>
    )
}
export default Home