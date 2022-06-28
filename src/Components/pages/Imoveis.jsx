import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import IM79703 from "./imoveis/IM79703";

export default function Imoveis() {
    return (
        <>
            <div className="container_imoveis_menu container">
                <div className="imoveis_menu">
                    <h1>Índice</h1>
                    <button>
                        <Link to="/IM79703">im79703</Link>
                    </button>
                </div>
            </div>
        </>
    );
}
