import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import CookiesRouter from "../src/router/CookiesRouter";
import TopMenu from "./components/menu/TopMenu";
import BackGroundImage from "./assets/img/Fond.png";

function App() {
  return (
      <BrowserRouter>
          <TopMenu />
          <CookiesRouter />
      </BrowserRouter>
  );
}

export default App;
