import React from "react";
import Img from "react-cool-img";
import { Link ,NavLink} from "react-router-dom";
import logo from "../assets/logo.png";
import { Nav, Container, Row, Col, } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <Container className="mt-5">
        <Row id="menu">
          <Col md="auto">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Img src={logo} alt="logo_milvest" width="100px" />
            </Link>
          </Col>
          <Col>
            <Nav className="nav">
              <Nav.Item>
                <Nav.Link as={Link} to="/" style={{ fontSize: "1rem",color:"white",fontWeight:"bold" }}>
                  HOME
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="imoveis" style={{ fontSize: "1rem",color:"white",fontWeight:"bold" }}>
                  IMÓVEIS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="faq" style={{ fontSize: "1rem",color:"white",fontWeight:"bold" }}>
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="contato" style={{ fontSize: "1rem",color:"white",fontWeight:"bold" }}>
                  CONTATO
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="missao" style={{ fontSize: "1rem",color:"white",fontWeight:"bold" }}>
                  MISSÃO
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="politica" style={{ fontSize: "1rem",color:"white",fontWeight:"bold" }}>
                  POLÍTICA DE PRIVACIDADE
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <div id="header">
            <div id="creci">
              <p><b>CRECI-J35272</b></p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
