import "../../assets/css/TopMenu.css";
import CookieImage from "../../assets/img/cookieR.png";

const TopMenu = () => {
    return (
        <div className="top-menu">
            <div className="item">Accueil</div>
            <div className="item">Catalogue</div>
            <div className="item"><img src={CookieImage} alt="" width={50}/></div>
            <div className="item">Connexion</div>
            <div className="item">Inscription</div>
        </div>
    )
}

export default TopMenu