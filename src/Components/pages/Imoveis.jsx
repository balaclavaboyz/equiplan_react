import React from "react";
import { Link } from "react-router-dom";

export default function Imoveis() {
    return (
        <>
            <div className="indice_imoveis_wrapper">
                <h1>Casas / Lojas Comerciais</h1>
                <Link to="/IM79973">IM79973</Link>
                <Link to="/IM79981">IM79981</Link>
                <Link to="/IM79941">IM79941</Link>
                <Link to="/IM79922">IM79922</Link>
                <Link to="/IM79886">IM79886</Link>
                <Link to="/IM79836">IM79836</Link>
                <Link to="/IM79866">IM79866</Link>
            </div>
        </>
    );
}
