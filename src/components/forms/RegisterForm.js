import "../../assets/css/LoginForm.css";

const LoginForm = () => {
    const onClick = (e) => {

    }

    return (
        <div className="register-form">
            <h1 id="title-form">Inscription</h1>
            <p id="text-form">Vous devez être enregistré pour utiliser le site</p>
            <div className="list-input">
                <input type="text" placeholder="Email" className="input-login-form"/>
                <input type="text" placeholder="Mot de passe" className="input-login-form"/>
                <input type="text" placeholder="Retaper le mot de passe" className="input-login-form"/>
            </div>
            <button type="submit" id="btn-form" onClick={onClick}>Connexion</button>
        </div>
    )
}

export default LoginForm