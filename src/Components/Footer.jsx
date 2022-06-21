import React from "react";
import "../assets/my.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        {/* <div className="link_rapidos">
          <Link to="/">
          HOME
          </Link>
          <Link to="/faq">
          FAQ
          </Link>
          <Link to="/contato">
          CONTATO
          </Link>
          <Link to="/missao">
          MISSÃO
          </Link>
          <Link to="/politica">
          POLÍTICA
          </Link>
        </div> */}
        <div className="copy">
          <p>Powered By Peter Kim 2022</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
