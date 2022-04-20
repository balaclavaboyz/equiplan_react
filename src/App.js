import Menu from "./Components/Menu";
import { Container } from "react-bootstrap";
import FloatButton from "./Components/Footer";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Politica from "./Politica";
import Faq from "./Components/Faq";
import "./assets/my.css"
import contato from "./Components/contato"

const App = () => {
  return (
    <>
      <div className="raiz">
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/politica" component={Politica} />
          <Route path="/contato" component={contato} />
        </Switch>
        <FloatButton/>
        <div className="footer">
          <a id="politica" href="/politica">Política de Privacidade</a>
          <p id="legenda">Desenvolvido por Peter Kim</p>
        </div>

      </div>
    </>
  );
};

export default App;
