import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import CookiesRouter from "../src/router/CookiesRouter";

function App() {
  return (
      <BrowserRouter>
        <CookiesRouter />
      </BrowserRouter>
  );
}

export default App;
