import React from "react";
import { Link } from "react-router-dom";

export default function Imoveis() {
    return (
        <>
            <div className="indice_imoveis_wrapper">
                <h1>Índice de Imóveis</h1>
                <Link to="/IM79881">IM79881</Link>
                <Link to="/IM79886">IM79886</Link>
                <Link to="/IM79836">IM79836</Link>
                <Link to="/IM79866">IM79866</Link>
                <Link to="/IM79703">IM79703</Link>
                <Link to="/IM79868">IM79868</Link>
            </div>
        </>
    );
}
