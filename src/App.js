import Menu from "./Components/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Politica from "./Components/pages/Politica";
import Faq from "./Components/pages/Faq";
import Contato from "./Components/pages/contato";
import Missao from "./Components/pages/missao";
import WhatsappIcon from "./Components/WhatsappIcon";
import Footer from "./Components/Footer";
import Imoveis from "./Components/pages/Imoveis";

const App = () => {
    return (
        <>
            <div className="main">
                <Menu></Menu>
                <div className="content_wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="faq" element={<Faq />} />
                        <Route path="politica" element={<Politica />} />
                        <Route path="contato" element={<Contato />} />
                        <Route path="missao" element={<Missao />} />
                        <Route path="imoveis/*" element={<Imoveis />}>
                        </Route>
                    </Routes>
                </div>
            </div>
            <Footer></Footer>
            <WhatsappIcon></WhatsappIcon>
        </>
    );
};

export default App;
