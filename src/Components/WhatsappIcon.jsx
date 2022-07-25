import React from "react";
import whats from "../assets/flutuante/whatsapp.svg";
import Img from "react-cool-img";
import Phone from '../assets/flutuante/phone.png'

const Footer = () => {
  const botaoStyleWhatsapp = {
    position: "fixed",
    zIndex: 99,
    bottom: "10px",
    // bottom: "104px",
    right: "20px",
  };
  const phoneStyle={
    position:'fixed',
    zIndex: 99,
    bottom:'100px',
    right:'20px',
  }
  const mensagemStyle={
    backgroundColor:'lightgrey',
    borderRadius:'5px',
    padding:'5px 5px',
    position:'fixed',
    zIndex:99,
    bottom:'10px',
    right:'104px'
  }
  const ligarStyle={
    backgroundColor:'lightgrey',
    borderRadius:'5px',
    padding:'5px 5px',
    position:'fixed',
    zIndex:99,
    bottom:'100px',
    right:'104px' 
  }
  return (
    <>
      <a href="https://wa.me/5511973364612" style={botaoStyleWhatsapp}>
        <Img src={whats} alt="whatsapp contato" width="64" height="64"></Img>
      </a>
      <a href="tel:+5511973364612" style={phoneStyle}>
        <Img src={Phone} alt="botão para ligar" width='64' height='64' style={{color:'green'}}></Img>
      </a>
      {/* legenda */}
      <p style={mensagemStyle}>Mensagem</p>
      <p style={ligarStyle}>Ligar</p>
    </>
  );
};

export default Footer;
