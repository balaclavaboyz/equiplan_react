import React from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { Nav, Navbar, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Img src={logo} alt="logo_milvest" />
        </Link>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link href="https://milvest.vesti.mobi/">Catálogo/Pedidos</Nav.Link>
            <Nav.Link  as={Link} to="/politica">Política de Privacidade</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
