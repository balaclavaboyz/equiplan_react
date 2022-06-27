import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import IM79703 from "./imoveis/IM79703";
import StraightenIcon from "@mui/icons-material/Straighten";

export default function Imoveis() {
    return (
        <>
            <div className="container_imoveis_menu container">
                <div className="imoveis_menu">
                    <h1>Índice</h1>
                    <button>
                        <Link to="IM79703">im79703</Link>
                    </button>
                </div>
                <div className="imoveis_context">
                    <div className="imovelGaleria">
                        <Routes>
                            <Route path="IM79703" element={<IM79703 />} />
                        </Routes>
                        <Outlet />
                    </div>
                </div>
                <div className="imoveis_desp">
                    {/*titulo  */}
                    <h1>Casa em Lapa com 200m²</h1>
                    {/* endereco */}
                    <p>Rua Guararapes, 669, Lapa, São Paulo / SP</p>
                    {/* preco */}
                    <p>Aluguel R$ 4.000,00</p>
                    {/* botao para contato ou proposta, talvez email */}
                    {/* icons emoji com info */}
                    <div className="imoveis_specs">
                        <div className="imoveis_specs_pos">
                            <StraightenIcon></StraightenIcon>
                            200m²

                            1 suites

                            1 vaga
                            5 quartos
                            
                        {/* metro quadrado, quantos quartos, banheiros, vaga de carro, andar do ape, mobilias e prox do metro */}
                        </div>
                    </div>
                    {/* descripcao do imovel */}
                    <p>
                        Parte inferior: 3 dormitórios (suíte), banheiro, sala
                        jantar, sala social Parte superior: 2 dormitórios, sala,
                        cozinha, banheiro, garagem, edícula e quintal
                        IPTU:.R$1.100,00 p/mês
                    </p>
                    <p>CEP: 5077051</p>
                </div>
            </div>
        </>
    );
}
