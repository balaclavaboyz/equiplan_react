import React, { useState } from "react";
import {
    ProSidebar,
    Menu as MenuFromSidebar,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import Img from "react-cool-img";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { slide as Burger } from "react-burger-menu";

const Sidebar = () => {
    return (
        <>
            <div id="burger">
                <Burger width={'150px'}>
                    <Link to="/">Home</Link>
                    <Link to="/imoveis">Imóveis</Link>
                    <Link to="/faq">Faq</Link>
                    <Link to="/contato">Contato</Link>
                    <Link to="/missao">Missão</Link>
                    <Link to="/politica">Política de Privacidade</Link>
                </Burger>
                <div className="center">
                    <img
                        src={logo}
                        alt="link para homepage"
                        style={{ width: 100 }}
                    />
                </div>
            </div>
            <Container className="mt-5" id="menu_principal">
                <Row id="menu">
                    <Col md="auto">
                        <Link
                            to="/"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            <Img src={logo} alt="logo_milvest" width="100px" />
                        </Link>
                    </Col>
                    <Col>
                        <Nav className="nav">
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/"
                                    style={{
                                        fontSize: "1rem",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    HOME
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="imoveis"
                                    style={{
                                        fontSize: "1rem",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    IMÓVEIS
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="faq"
                                    style={{
                                        fontSize: "1rem",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    FAQ
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="contato"
                                    style={{
                                        fontSize: "1rem",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    CONTATO
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="missao"
                                    style={{
                                        fontSize: "1rem",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    MISSÃO
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="politica"
                                    style={{
                                        fontSize: "1rem",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    POLÍTICA DE PRIVACIDADE
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <div id="header">
                        <div id="creci">
                            <p>
                                <b>CRECI-J35272</b>
                            </p>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default Sidebar;
