import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Titulo from './Components/Titulo'
import Galeria1 from './Components/Galeria1'
import Galeria2 from './Components/Galeria2'
import SubTitulo from './Components/SubTitulo'
import './assets/my.css'

const Home=()=>{
    return(
        <Container>

          <div id="body">
            <div className="titulo">
              <Titulo/>
            </div>
            <div className="galeria">
              <Galeria1></Galeria1>
            </div>
            <div className="galeria2">
              <Galeria2></Galeria2>
            </div>
            <div className="subtitulo">
              <SubTitulo></SubTitulo>
            </div>
            <div className="footer">
              <div className="text-center">
                  <a href="/politica">Política de Privacidade</a>
                <p>Desenvolvido por Peter Kim</p>
              </div>
            </div>
          </div>

        {/* <Row className="center" xs={1} md={2}>
          <Col >
            <Titulo/>
          </Col>
          <Col>
            <Galeria1 />
          </Col>
        </Row>
        <Row className="center" xs={1} md={2} >
          
        <Col md={{order:'last'}}>
            <SubTitulo/>
          </Col>
          <Col md={{order:'first'}} >
            <Galeria2 />
          </Col>
          
        </Row> */}
	</Container>
    )
}

export default Home