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
<<<<<<< HEAD
<tr id="IM80198"><th><Link to="/IM80198">IM80198</Link></th><th>Casa em Jardim das Bandeiras com 200m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 2.600.000,00</th></tr>
<tr id="IM80221"><th><Link to="/IM80221">IM80221</Link></th><th>Casa em Vila Mascote com 200m²</th><th>Venda e Aluguel</th><th>R$ 7.060,00</th><th>R$ 1.480.000,00</th></tr>
<tr id="IM80270"><th><Link to="/IM80270">IM80270</Link></th><th>Casa em Vila Clementino com 280m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 3.500.000,00</th></tr>
<tr id="IM80301"><th><Link to="/IM80301">IM80301</Link></th><th>Casa em Lapa com 343m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 2.190.000,00</th></tr>
<tr id="IM80045"><th><Link to="/IM80045">IM80045</Link></th><th>Casa em Brooklin Paulista com 174m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.450.000,00</th></tr>
                                <th>
                                </th>
                                <th>
                                    Prédio Comercial em Jardim Paulistano com
                                    1156m²
                                </th>
                                <th>Aluguel</th>
                                <th>R$ 80.000,00</th>
                                <th>R$ 0,00</th>
                            </tr>
=======
<tr id="IM80116"><th><Link to="/IM80116">IM80116</Link></th><th>Prédio Comercial em Jardim Paulistano com 1156m²</th><th>Aluguel</th><th>R$ 80.000,00</th><th>R$ 0,00</th></tr>
<tr id="IM80109"><th><Link to="/IM80109">IM80109</Link></th><th>Loja em Santo Amaro com 140m²</th><th>Aluguel</th><th>R$ 24.000,00</th><th>R$ 0,00</th></tr>
<tr id="IM80182"><th><Link to="/IM80182">IM80182</Link></th><th>Salão Comercial em Jardim Paulista com 250m²</th><th>Aluguel</th><th>R$ 7.000,00</th><th>R$ 0,00</th></tr>
<tr id="IM80045"><th><Link to="/IM80045">IM80045</Link></th><th>Casa em Brooklin Paulista com 174m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.450.000,00</th></tr>
>>>>>>> ce8f0dd4e8bb990c54566367c98751c98ea76d7e
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
