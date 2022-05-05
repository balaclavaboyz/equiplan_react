import React from "react";
import Button from "react-bootstrap/Button";

const ButtonCatalogo = () => {
    return (
        <>
        <div className="d-grid">

            <Button className="botaoDentroImagem" size="lg" variant="light">
                <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={'https://equiplan.orbitare.com.br'}
                    >
                    Confira
                </a>
            </Button>{" "}
        </div>
        </>
    );
};

export default ButtonCatalogo;
