import {Redirect ,Route, Switch} from "react-router-dom";
import Home from "../components/page/Home";

const CookiesRouter = () => {

    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default CookiesRouter