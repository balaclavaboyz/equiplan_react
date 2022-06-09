import React from "react";
import "../assets/my.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="link_rapidos">
          <Link to="/">
            <button>HOME</button>
          </Link>
          <Link to="/faq">
            <button>FAQ</button>
          </Link>
          <Link to="/contato">
            <button>CONTATO</button>
          </Link>
          <Link to="/missao">
            <button>MISSÃO</button>
          </Link>
          <Link to="/politica">
            <button>POLÍTICA DE PRIVACIDADE</button>
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
