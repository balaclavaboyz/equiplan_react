import React from "react";
import { Container, Row } from "react-bootstrap";

const Faq = () => {
    return (
        <Container>
            <br></br>
            <h1>Bem-vindo ao FAQ!</h1>
            <br></br>
            <Row>
                <h2>
                    Quais tipos de produtos e Investimentos, a Equiplan Oferece?
                </h2>
                <p></p>
                <p>Aquisição, Venda e Locação em Cidade de São Paulo:</p>
                <p>Lojas - Casas Comerciais</p>
                <p>Galpões - Terrenos - Áreas.</p>
            </Row>
            <Row>
                <h2>Que tipo de Consultoria, a Equiplan Oferece?</h2>
                <p></p>
                <p>Consultoria em:</p>
                <p>Escolha da Localização para o Seu Negócio.</p>
                <p>Acompanhamento no Crescimento dos Envolvidos.</p>
                <p>Crescimento - Expansão - Multiplicação do Seu negócio.</p>
            </Row>
            <Row>
                <p></p>
                <h2>Qual Horário de Atendimento?</h2>
                <p>Segunda a Sexta.</p>
            </Row>
        </Container>
    );
};

export default Faq;
