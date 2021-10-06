import {Redirect ,Route, Switch} from "react-router-dom";
import Home from "../components/page/Home";
import Login from "../components/page/Login";
import Register from "../components/page/Register";
import Catalog from "../components/page/Catalog";

const CookiesRouter = () => {

    return (
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/catalog">
                <Catalog />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default CookiesRouter