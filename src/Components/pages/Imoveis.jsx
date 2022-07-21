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
                            <tr id="IM80116">
                                <th>
                                    <Link to="/IM80116">IM80116</Link>
                                </th>
                                <th>
                                    Prédio Comercial em Jardim Paulistano com
                                    1156m²
                                </th>
                                <th>Aluguel</th>
                                <th>R$ 80.000,00</th>
                                <th>R$ 0,00</th>
                            </tr>
                            <th></th>
                            <th>Casa em Vila da Saúde com 80m²</th>
                            <th>Aluguel</th>
                            <th>R$ 2.500,00</th>
                            <th>R$ 0,00</th>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
