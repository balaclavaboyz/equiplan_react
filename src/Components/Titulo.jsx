import React from "react";
import ButtonCatalogo from "./ButtonCatalogo";

const Titulo = (props) => {
  return (
      <div className="text-center">
        {/*<h1 style={{fontSize:32}}>Confira!</h1> */}
        <ButtonCatalogo link="https://equiplan.orbitare.com.br"/>
      </div>
  );
};

export default Titulo;
