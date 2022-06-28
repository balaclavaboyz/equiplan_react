import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import IM79703 from "./imoveis/IM79703";

export default function Imoveis() {
    return (
        <>
        <div className="indice_imoveis_wrapper">
            <h1>Índice de Imóveis</h1>

            <Link to="/IM79703" >IM79703</Link>
        </div>
        </>
    );
}
