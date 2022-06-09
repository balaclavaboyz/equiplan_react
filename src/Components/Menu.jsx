import React from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Nav, Navbar, Container, Row, Col, Stack } from "react-bootstrap";

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
              <Img src={logo} alt="logo_milvest" width="80px" />
            </Link>
          </Col>
          <Col>
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link as={Link} to="/" style={{ fontSize: "1rem" }}>
                  HOME
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/faq" style={{ fontSize: "1rem" }}>
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contato" style={{ fontSize: "1rem" }}>
                  CONTATO
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/missao" style={{ fontSize: "1rem" }}>
                  MISSÃO
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/politica" style={{ fontSize: "1rem" }}>
                  POLÍTICA DE PRIVACIDADE
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <div id="header">
            <div id="creci">
              <p>CRECI - J 35272</p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Menu;
