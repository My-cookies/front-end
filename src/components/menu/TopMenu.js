import "../../assets/css/TopMenu.css";
import CookieImage from "../../assets/img/cookieR.png";
import {Link} from "react-router-dom";


const TopMenu = () => {
    return (
        <div className="top-menu">
            <Link className="item" to="/">Accueil</Link>
            <Link className="item" to="/catalog">Catalogue</Link>
            <div className="item"><img src={CookieImage} alt="" width={50}/></div>
            <Link className="item" to="/login">Connexion</Link>
            <Link className="item" to="/register">Inscription</Link>
        </div>
    )
}

export default TopMenu