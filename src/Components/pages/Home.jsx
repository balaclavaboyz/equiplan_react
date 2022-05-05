import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Titulo from "../Titulo";
import Galeria1 from "../Galeria1";
import Galeria2 from "../Galeria2";
import SubTitulo from "../SubTitulo";

const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Galeria1></Galeria1>
                        <Galeria2></Galeria2>
                    </Col>
                    {/* <Col>
                    </Col> */}
                </Row>
            </Container>
                {/* <Titulo />
                <Galeria1></Galeria1>
                <Galeria2></Galeria2>
                <SubTitulo></SubTitulo>
                <Footer></Footer> */}
        </>
    );
};

export default Home;
