import "../../assets/css/LoginForm.css";
import {useState} from "react";

const LoginForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const onClick = (e) => {
        e.preventDefault();

        if (!email || !password) {
            return 0;
        }
    }

    return (
        <div className="login-form">
            <h1 id="title-form">Bienvenue</h1>
            <p id="text-form">Vous devez être connecté pour utiliser le site</p>
            <div className="list-input">
                <input type="text" placeholder="Email" className="input-login-form"/>
                <input type="text" placeholder="Mot de passe" className="input-login-form"/>
                <p id="forget-password">Mot de passe oublié?</p>
            </div>
            <button type="submit" id="btn-form" onClick={onClick}>Connexion</button>
        </div>
    )
}

export default LoginForm