import React from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { Nav, Navbar, Container,Row } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Img src={logo} alt="logo_milvest" width="128px"/>
        </Link>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <p>CRECI - J 35272</p>
            <p>TELEFONE/WHATSAPP <a href="https://wa.me/5511973364612">(11)97336-4612</a></p>
            <p>EQUIPLAN@EQUIPLAN.COM.BR<a href="mailto:EQUIPLAN@EQUIPLAN.COM.BR"></a></p>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link href="https://equiplan.orbitare.com.br/">Catálogo</Nav.Link>
            <Nav.Link  as={Link} to="/politica">Política de Privacidade</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Menu;
