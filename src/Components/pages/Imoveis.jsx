import React from "react";
import { Link } from "react-router-dom";

export default function Imoveis() {
    return (
        <>
        <div className="container">

            <div className="indice_imoveis_wrapper">
                <h1>Casas / Lojas Comerciais</h1>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM80036">IM80036</Link><p>Casa em Jardim Ipanema (Zona Sul) com 315m²</p><p>Tipo: Venda e Aluguel</p><p>Valor Locação: R$ 3.500,00</p><p>Valor Venda: R$ 1.100.000,00</p></div>
            </div>
        </div>
        </>
    );
}
