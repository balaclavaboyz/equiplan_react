import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Titulo from "../Titulo";
import Galeria1 from "../Galeria1";
import Galeria2 from "../Galeria2";
import SubTitulo from "../SubTitulo";

const Home = () => {
    return (
        <>
            <div className="galeria_wrapper">
                <Galeria1></Galeria1>
                <Galeria2></Galeria2>
            </div>
        </>
    );
};

export default Home;
