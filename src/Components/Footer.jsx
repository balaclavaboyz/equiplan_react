import React from "react";
import "../assets/my.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="link_rapidos">
          <Link to="/">
            <a aria-label="Home">HOME</a>
          </Link>
          <Link to="/faq">
            <a aria-label="Faq">FAQ</a>
          </Link>
          <Link to="/contato">
            <a aria-label="Contato">CONTATO</a>
          </Link>
          <Link to="/missao">
            <a aria-label="missão">MISSÃO</a>
          </Link>
          <Link to="/politica">
            <a aria-label="politica">POLÍTICA DE PRIVACIDADE</a>
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
