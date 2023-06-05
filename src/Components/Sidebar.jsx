import React, { useContext, useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Nav, Container, Row, Col } from "react-bootstrap";
// import { slide as Burger } from "react-burger-menu";

const Sidebar = () => {
const [isOpen, setIsOpen]=useState(false)
const toggleMenu=()=>{
    setIsOpen((open)=>!open)
}

    return (
        <>
        <ul class='burger_ul'>
            <a href="/">
            <img src={logo} alt="home" style={{width:`100px`,height:`100px`}}/>
            </a>
            <li class={`burger${isOpen ? " isOpen":""}`}>
                <Link onClick={toggleMenu} to="/">Home</Link>
                <Link onClick={toggleMenu} to="/imoveis">Imóveis</Link>
                <Link onClick={toggleMenu} to="/faq">Faq</Link>
                <Link onClick={toggleMenu} to="/contato">Contato</Link>
                {/* <Link onClick={toggleMenu} to="/missao">Missão</Link> */}
                <Link onClick={toggleMenu} to="/politica">Política de Privacidade</Link>
            </li>
            <li class='mobile_menu' onClick={toggleMenu}>
                <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
                </div>  
            </li>
        </ul>
            <Container>
                <Row id='mobile_creci'>
                    <b style={{textAlign:'center'}}>CRECI-J35272</b>
                </Row>
            </Container>
        </>
    );
};

export default Sidebar;
