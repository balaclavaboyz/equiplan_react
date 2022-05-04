import Menu from "./Components/Menu";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Politica from "./Politica";
import Faq from "./Components/Faq";
import "./assets/my.css";
import contato from "./Components/contato";
import missao from "./Components/missao";
import Footer from './Components/Footer'

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
          <Route path="/missao" component={missao} />
        </Switch>
      </div>
    </>
  );
};

export default App;
