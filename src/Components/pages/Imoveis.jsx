import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Imoveis() {
    return (
        <>
            <div className="indice_imoveis_wrapper">
                <h1>Índice de Imóveis</h1>

                <Link to="/IM79703">IM79703</Link>
                <Link to="/IM79868">IM79868</Link>
            </div>
        </>
    );
}
