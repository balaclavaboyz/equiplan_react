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
<tr id="IM79981"><th><Link to="/IM79981">IM79981</Link></th><th>Casa em Vila da Saúde com 80m²</th><th>Aluguel</th><th>R$ 2.500,00</th><th>R$ 0,00</th></tr>
<tr id="IM80018"><th><Link to="/IM80018">IM80018</Link></th><th>Loja em Santo Amaro com 440m²</th><th>Aluguel</th><th>R$ 35.000,00</th><th>R$ 0,00</th></tr>
                    </thead>
                </table>
            </div>
        </div>
        </>
    );
}
