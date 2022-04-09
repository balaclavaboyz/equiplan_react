import React from "react";
import ButtonCatalogo from "./ButtonCatalogo";
import "../assets/my.css";

const Titulo = (props) => {
  return (
      <div className="text-center">
        <h1>Locação - Casa Residencial - 1 a 5 Mil Reais</h1>
        <ButtonCatalogo link="https://equiplan.orbitare.com.br/imoveis?deal_type=1&tipos%5B%5D=9&tipos%5B%5D=1004&tipos%5B%5D=22"/>
      </div>
  );
};

export default Titulo;
