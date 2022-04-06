import React from "react";
import { Container, Row } from "react-bootstrap";

const Faq = () => {
  return (
    <Container>
      <h1>Bem-vindo ao FAQ!</h1>
      <Row>
        <h2>Atacado de quantas peças?</h2>
        <p>12 peças</p>
      </Row>
      <Row>
        <h2>Qual horário comercial?</h2>
        <p>
          7:30 às 17:30, Segunda a Sexta - Obs: Atendiamento para cliente
          atacado
        </p>
      </Row>
      <Row>
        <h2>Como faz para comprar no atacado?</h2>
        <p>Ter CNPJ no ramo de moda</p>
      </Row>
      <Row>
        <h2>Eu consigo comprar pelo o Whatsapp?</h2>
        <p>Sim pelo o Whatsapp, o App da Milvest ou prensencial</p>
      </Row>
    </Container>
  );
};

export default Faq;
