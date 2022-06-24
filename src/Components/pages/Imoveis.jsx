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
          <h1>Casa em Lapa com 200m²</h1>
          <p>Lapa</p>
          <p>Rua Guararapes, 669 - São Paulo / SP</p>
          <p>Aluguel R$ 4.000,00</p>
          <p>
            Parte inferior: 3 dormitórios (suíte), banheiro, sala jantar, sala
            social Parte superior: 2 dormitórios, sala, cozinha, banheiro,
            garagem, edícula e quintal IPTU:.R$1.100,00 p/mês
          </p>
          <p>CEP: 5077051</p>
          <div className="area">
            <StraightenIcon></StraightenIcon>
            {/* TODO fazer as legendas */}
          </div>
        </div>
      </div>
    </>
  );
}
