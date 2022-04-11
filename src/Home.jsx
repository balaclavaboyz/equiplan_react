import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import Titulo from './Components/Titulo'
import Galeria1 from './Components/Galeria1'
import Galeria2 from './Components/Galeria2'
import Galeria3 from './Components/Galeria3'
import Galeria4 from './Components/Galeria4'
import SubTitulo from './Components/SubTitulo'
import Texto_galeria3 from './Components/Texto_galeria3'
import Texto_galeria4 from './Components/Texto_galeria4'
import './assets/my.css'

const Home=()=>{
    return(
        <Container>
        <Row className="center" xs={1} md={2}>
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
          
        </Row>
    )
}

export default Home