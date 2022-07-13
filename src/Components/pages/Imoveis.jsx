import React from "react";
import { Link } from "react-router-dom";

export default function Imoveis() {
    return (
        <>
        <div className="container">

            <div className="indice_imoveis_wrapper">
                <h1>Casas / Lojas Comerciais</h1>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM80018">IM80018</Link><p>Loja em Santo Amaro com 440m²</p><p>Tipo: Aluguel</p><p>Valor Locação: R$ 35.000,00</p><p>Valor Venda: R$ 0,00</p></div>
            </div>
        </div>
        </>
    );
}
