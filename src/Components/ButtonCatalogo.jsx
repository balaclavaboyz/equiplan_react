import React from "react";
import Button from "react-bootstrap/Button";

const ButtonCatalogo = () => {
    return (
        <>

                <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={'https://equiplan.orbitare.com.br'}
                    >
        <div className="d-grid">
            <Button className="botaoDentroImagem" size="lg" variant="light">
                    Confira
            </Button>{" "}
        </div>
                </a>
        </>
    );
};

export default ButtonCatalogo;
