import "./App.css";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Tarjeta from "./Tarjeta/Tarjeta";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [tarjetas, setTarjetas] = useState([]);
  useEffect(() => {
    axios
      .get("https://61b9389738f69a0017ce5f61.mockapi.io/tarjetas")
      .then((response) => {
        console.log(response.data);
        setTarjetas(response.data);
      });
    console.log(tarjetas);
  }, []);
  return (
    <div className="App container">
      <Navbar />
      <Main />
      {tarjetas.map((tarjeta) => (
        <Tarjeta
          img={tarjeta.img}
          titulo={tarjeta.titulo}
          detalle={tarjeta.detalle}
          precio={tarjeta.precio}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
