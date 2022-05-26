import React from "react"; //Importando biblioteca React
import ReactDOM from "react-dom"; // Biblioteca React Dom
import Home from './componentes/Home';
import '../src/componentes/index.css';


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);