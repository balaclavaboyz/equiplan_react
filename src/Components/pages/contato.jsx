import React from "react";
import { Container, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <Container>
      <br></br>
      <h1>Bem-vindo ao Equiplan!</h1>
      <br></br>
      <Row>
        <h2>Escreva suas dúvidas</h2>
        <p>Whatsapp: <a href="https://wa.me/5511973306098">(11)97330-6098</a></p>
        <p>E-mail: <a href="mailto:equiplan@equiplan.com.br">equiplan@equiplan.com.br</a> </p>
        <p>Contato: <a href="tel:11973306098">(11)97330-6098</a></p>
      </Row>
    </Container>
  );
};

export default Faq;
