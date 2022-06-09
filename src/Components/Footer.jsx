import React from "react";
import "../assets/my.css";
import whatsappLogo from "../assets/black_whatsapp.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="link_rapidos">
          <Link to="/">
            <a>HOME</a>
          </Link>
          <Link to="/faq">
            <a>FAQ</a>
          </Link>
          <Link to="/contato">
            <a>CONTATO</a>
          </Link>
          <Link to="/missao">
            <a>MISSÃO</a>
          </Link>
          <Link to="/politica">
            <a>POLÍTICA DE PRIVACIDADE</a>
          </Link>
        </div>
        <div className="copy">
          <p>Peter Kim 2022</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
