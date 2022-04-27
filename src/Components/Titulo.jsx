import React from "react";
import ButtonCatalogo from "./ButtonCatalogo";
import "../assets/my.css";

const Titulo = (props) => {
  return (
      <div className="text-center">
        <h1 style={{fontSize:32}}>Locação:</h1>
        <ButtonCatalogo link="https://equiplan.orbitare.com.br"/>
      </div>
  );
};

export default Titulo;
