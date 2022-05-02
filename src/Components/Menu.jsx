import React from "react";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { Nav, Navbar, Container,Row } from "react-bootstrap";
import '../assets/my.css'

const Menu = () => {
  return (
    <>
      <div id="header">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <Img src={logo} alt="logo_milvest" width="80px"/>
          </Link>
        <div id="menu">
          <Navbar expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" class="flex justifyContent center alignItems center">
                <Nav.Link  as={Link} to="/" style={{fontSize:"1rem"}}>HOME</Nav.Link>
                <Nav.Link  as={Link} to="/faq" style={{fontSize:"1rem"}} >FAQ</Nav.Link>
                <Nav.Link  as={Link} to="/contato" style={{fontSize:"1rem"}}>CONTATO</Nav.Link>
<Nav.Link  as={Link} to="/missao" style={{fontSize:"1rem"}}>MISSÃO</Nav.Link>
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
