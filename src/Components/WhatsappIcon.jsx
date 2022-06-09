import React from "react";
import insta from "../assets/flutuante/instagram.svg";
import whats from "../assets/flutuante/whatsapp.svg";
import Img from "react-cool-img";

const Footer = () => {
  const botaoStyleWhatsapp = {
    position: "fixed",
    zIndex: 99,
    bottom: "10px",
    // bottom: "104px",
    right: "20px",
  };
  return (
    <>
      <a href="https://wa.me/5511973364612" style={botaoStyleWhatsapp}>
        <Img src={whats} alt="whatsapp contato" width="64" height="64"></Img>
      </a>
    </>
  );
};

export default Footer;
