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
<tr id="IM80655"><th><Link to="/IM80655">IM80655</Link></th><th>Casa em Alto da Lapa com 297m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 2.438.000,00</th></tr>
<tr id="IM80045"><th><Link to="/IM80045">IM80045</Link></th><th>Casa em Brooklin Paulista com 174m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.450.000,00</th></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
