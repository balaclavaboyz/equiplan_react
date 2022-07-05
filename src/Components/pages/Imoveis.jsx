import React from "react";
import { Link } from "react-router-dom";

export default function Imoveis() {
    return (
        <>
            <div className="indice_imoveis_wrapper">
                <h1>Índice de Imóveis</h1>
                <Link to="/IM79918">IM79918</Link>
                <Link to="/IM79912">IM79912</Link>
                <Link to="/IM79922">IM79922</Link>
                <Link to="/IM79939">IM79939</Link>
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
