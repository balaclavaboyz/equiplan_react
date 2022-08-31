import React from "react";
import { Link } from "react-router-dom";
import "../../assets/table.css";
import "../../assets/table.js";

export default function Imoveis() {
    return (
        <>
            <div className="container">
                <div className="indice_imoveis_wrapper">
                    <h1>Casas / Lojas</h1>
                    <table className="rtable rtable--flip">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Título</th>
                                <th>Tipo</th>
                                <th>Locação</th>
                                <th>Venda</th>
                            </tr>
                        </thead>
                        <tbody>
                            <span id="insertion_table"></span>
<tr id="IM80442"><th><Link to="/IM80442">IM80442</Link></th><th>Casa em Santa Cecília</th><th>Venda e Aluguel</th><th>R$ 25.000,00</th><th>R$ 4.240.000,00</th></tr>
<tr id="IM79968"><th><Link to="/IM79968">IM79968</Link></th><th>Casa em Vila Romana com 170m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.480.000,00</th></tr>
<tr id="IM80045"><th><Link to="/IM80045">IM80045</Link></th><th>Casa em Brooklin Paulista com 174m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.450.000,00</th></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
