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
import IM79945 from "./Components/pages/imoveis/IM79945";
import IM79908 from "./Components/pages/imoveis/IM79908";
import IM79903 from "./Components/pages/imoveis/IM79903";
import IM79905 from "./Components/pages/imoveis/IM79905";
import IM79910 from "./Components/pages/imoveis/IM79910";
import IM79918 from "./Components/pages/imoveis/IM79918";
import IM79912 from "./Components/pages/imoveis/IM79912";
import IM79922 from "./Components/pages/imoveis/IM79922";
import IM79939 from "./Components/pages/imoveis/IM79939";
import IM79881 from "./Components/pages/imoveis/IM79881";
import IM79886 from "./Components/pages/imoveis/IM79886";
import IM79836 from "./Components/pages/imoveis/IM79836";
import IM79866 from "./Components/pages/imoveis/IM79866";
import IM79868 from "./Components/pages/imoveis/IM79868";
import IM79703 from "./Components/pages/imoveis/IM79703";

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
                        <Route path="imoveis" element={<Imoveis />}></Route>
                        <Route path="IM79945" element={<IM79945 />} />
                        <Route path="IM79908" element={<IM79908 />} />
                        <Route path="IM79903" element={<IM79903 />} />
                        <Route path="IM79905" element={<IM79905 />} />
                        <Route path="IM79910" element={<IM79910 />} />
                        <Route path="IM79918" element={<IM79918 />} />
                        <Route path="IM79912" element={<IM79912 />} />
                        <Route path="IM79922" element={<IM79922 />} />
                        <Route path="IM79939" element={<IM79939 />} />
                        <Route path="IM79881" element={<IM79881 />} />
                        <Route path="IM79886" element={<IM79886 />} />
                        <Route path="IM79836" element={<IM79836 />} />
                        <Route path="IM79866" element={<IM79866 />} />
                        <Route path="IM79868" element={<IM79868 />} />
                        <Route path="IM79703" element={<IM79703 />} />
                    </Routes>
                </div>
            </div>
            <Footer></Footer>
            <WhatsappIcon></WhatsappIcon>
        </>
    );
};

export default App;
