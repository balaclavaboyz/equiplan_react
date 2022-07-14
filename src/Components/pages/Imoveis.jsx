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
<tr id="IM80018"><th>IM80018</th><th>Loja em Santo Amaro com 440m²</th><th>Aluguel</th><th>R$ 35.000,00</th><th>R$ 0,00</th></tr>
                    </thead>
                </table>
            </div>
        </div>
        </>
    );
}
