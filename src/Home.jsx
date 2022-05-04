import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Titulo from "./Components/Titulo";
import Galeria1 from "./Components/Galeria1";
import Galeria2 from "./Components/Galeria2";
import SubTitulo from "./Components/SubTitulo";
import "./assets/my.css";
import Footer from "./Components/Footer";

const Home = () => {
    return (
        <>
            <div id="container-imgs">
                <div className="titulo">
                    <Titulo />
                </div>
                <div className="galeria">
                    <Galeria1></Galeria1>
                </div>
                <div className="galeria2">
                    <Galeria2></Galeria2>
                </div>
                <div className="subtitulo">
                    <SubTitulo></SubTitulo>
                </div>
            </div>
            <div className="footer">
              <Footer></Footer>
            </div>
        </>
    );
};

export default Home;
