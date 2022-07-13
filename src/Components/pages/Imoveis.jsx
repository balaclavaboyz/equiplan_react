import React from "react";
import { Link } from "react-router-dom";

export default function Imoveis() {
    return (
        <>
        <div className="container">

            <div className="indice_imoveis_wrapper">
                <h1>Casas / Lojas Comerciais</h1>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM80023">IM80023</Link><p>Apartamento em Indianópolis com 75m²</p><p>Tipo: Aluguel</p><p>Valor Locação: R$ 4.500,00</p><p>Valor Venda: R$ 0,00</p></div>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM80017">IM80017</Link><p>Casa em Cambuci com 180m²</p><p>Tipo: Aluguel</p><p>Valor Locação: R$ 6.300,00</p><p>Valor Venda: R$ 0,00</p></div>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM79981">IM79981</Link><p>Casa em Vila da Saúde com 80m²</p><p>Tipo: Aluguel</p><p>Valor Locação: R$ 2.500,00</p><p>Valor Venda: R$ 0,00</p></div>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM79973">IM79973</Link><p>Casa em Jardim Miriam com 282m²</p><p>Tipo: Venda e Aluguel</p><p>Valor Locação: R$ 5.000,00</p><p>Valor Venda: R$ 1.272.000,00</p></div>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM79941">IM79941</Link><p>Salão Comercial em Vila Moraes com 40m²</p><p>Tipo: Aluguel</p><p>Valor Locação: R$ 1.600,00</p><p>Valor Venda: R$ 0,00</p></div>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM79922">IM79922</Link><p>Loja em Lapa com 228m²</p><p>Tipo: Aluguel</p><p>Valor Locação: R$ 4.500,00</p><p>Valor Venda: R$ 0,00</p></div>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM79866">IM79866</Link><p>Galpão em Vila Romana com 130m²</p><p>Tipo: Aluguel</p><p>Valor Locação: R$ 4.000,00</p><p>Valor Venda: R$ 0,00</p></div>
                <div style={{display:'flex',gap:'1rem'}}><Link to="/IM79836">IM79836</Link><p>Casa Comercial em Pinheiros com 400m²</p><p>Tipo: Aluguel</p><p>Valor Locação: R$ 4.000,00</p><p>Valor Venda: R$ 0,00</p></div>
            </div>
        </div>
        </>
    );
}
