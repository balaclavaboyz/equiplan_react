import React from "react";
import { Link } from "react-router-dom";
import "../../assets/table.css";
import "../../assets/table.js";

export default function Imoveis() {
    return (
        <>
            <div className="container">
                <div className="indice_imoveis_wrapper">
                    <h1>Casas / Lojas Comerciais</h1>
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
<tr id="IM80117"><th><Link to="/IM80117">IM80117</Link></th><th>Casa em Jardim Piracuama</th><th>Venda</th><th>R$ 0,00</th><th>R$ 250.000,00</th></tr>
<tr id="IM80133"><th><Link to="/IM80133">IM80133</Link></th><th>Galpão em Ipiranga com 150m²</th><th>Aluguel</th><th>R$ 9.500,00</th><th>R$ 0,00</th></tr>
<tr id="IM80017"><th><Link to="/IM80017">IM80017</Link></th><th>Casa em Cambuci com 180m²</th><th>Aluguel</th><th>R$ 6.300,00</th><th>R$ 0,00</th></tr>
<tr id="IM80045"><th><Link to="/IM80045">IM80045</Link></th><th>Casa em Brooklin Paulista com 174m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.450.000,00</th></tr>
                            <tr id="IM79981">
                                <th>
                                    <Link to="/IM79981">IM79981</Link>
                                </th>
                                <th>Casa em Vila da Saúde com 80m²</th>
                                <th>Aluguel</th>
                                <th>R$ 2.500,00</th>
                                <th>R$ 0,00</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
