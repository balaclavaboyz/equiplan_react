import React from "react";
import { Link } from "react-router-dom";
import '../../assets/table.css'

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
                        <span id="insertion_table"></span>
                    </thead>
                </table>
            </div>
        </div>
        </>
    );
}
