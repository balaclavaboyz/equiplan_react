import React from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { Nav, Navbar, Container,Row } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <div id="header">
        <div>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Img src={logo} alt="logo_milvest" width="128px"/>
          </Link>
        </div>
        <div id="menu">
          <Navbar bg="light" expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" class="flex justifyContent center alignItems center">
                <Nav.Link  as={Link} to="/" style={{fontSize:24}}>HOME</Nav.Link>
                <Nav.Link  as={Link} to="/faq" style={{fontSize:24}}>FAQ</Nav.Link>
                <Nav.Link  as={Link} to="/contato" style={{fontSize:24}}>CONTATO</Nav.Link>
                {/*
                <Nav.Link href="https://equiplan.orbitare.com.br/">Catálogo</Nav.Link>
                <Nav.Link  as={Link} to="/politica">Política de Privacidade</Nav.Link>
                */}
              </Nav>
            </Navbar.Collapse> 
          </Navbar>
        </div>
        <div id="creci">
            <p>CRECI - J 35272</p>
        </div>


      </div>
    </>
  );
};

export default Menu;
