import Menu from "./Components/Menu";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Politica from "./Components/pages/Politica";
import Faq from "./Components/pages/Faq";
import contato from "./Components/pages/contato";
import missao from "./Components/pages/missao";
import { Container, Row } from "react-bootstrap";
import WhatsappIcon from "./Components/WhatsappIcon";
import Footer from "./Components/Footer";

const App = () => {
    return (
        <>
            <Container>
                <Row>
                    <Menu />
                </Row>
                <Row>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/politica" component={Politica} />
                        <Route path="/contato" component={contato} />
                        <Route path="/missao" component={missao} />
                    </Switch>
                </Row>
                <Row id="footer">
                    <Footer></Footer>
                </Row>
            </Container>
            <WhatsappIcon></WhatsappIcon>
        </>
    );
};

export default App;
