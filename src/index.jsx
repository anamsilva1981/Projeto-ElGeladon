import React from "react"; //Importando biblioteca React
import ReactDOM from "react-dom"; // Biblioteca React Dom
import Home from '../src/views/Home/Home'
import '../src/assets/style/main.css'



ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);