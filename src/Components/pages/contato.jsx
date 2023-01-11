import React from "react";
import { Container, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <Container>
      <br></br>
      <h1>Contato</h1>
      <br></br>
      <Row>
        <h5>Mande as sua dúvidas!</h5>
        <br />
        <p>Whatsapp: <a href="https://wa.me/5511988109466">(11)98810-9466</a></p>
        <p>E-mail: <a href="mailto:equiplan@equiplan.com.br">equiplan@equiplan.com.br</a> </p>
        {/* <p>Contato: <a href="tel:11988109466">(11)98810-9466</a></p> */}
      </Row>
    </Container>
  );
};

export default Faq;
