import Sidebar from "./Components/Sidebar";
import '../src/assets/sidebar.css'
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Politica from "./Components/pages/Politica";
import Faq from "./Components/pages/Faq";
import Contato from "./Components/pages/contato";
import Missao from "./Components/pages/missao";
import WhatsappIcon from "./Components/WhatsappIcon";
import Footer from "./Components/Footer";
import Imoveis from "./Components/pages/Imoveis";
import IM80009 from "./Components/pages/imoveis/IM80009";
import IM80036 from "./Components/pages/imoveis/IM80036";
import IM80017 from "./Components/pages/imoveis/IM80017";
import IM79981 from "./Components/pages/imoveis/IM79981";
import IM79973 from "./Components/pages/imoveis/IM79973";
import IM79941 from "./Components/pages/imoveis/IM79941";
import IM79922 from "./Components/pages/imoveis/IM79922";
import IM79866 from "./Components/pages/imoveis/IM79866";
import IM79836 from "./Components/pages/imoveis/IM79836";

const App = () => {
    return (
        <>
            <div className="main">
                <Sidebar></Sidebar>
                <div className="content_wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="faq" element={<Faq />} />
                        <Route path="politica" element={<Politica />} />
                        <Route path="contato" element={<Contato />} />
                        <Route path="missao" element={<Missao />} />
                        <Route path="imoveis" element={<Imoveis />}></Route>
                        <Route path="IM80009" element={<IM80009 />} />
                        <Route path="IM80036" element={<IM80036 />} />
                        <Route path="IM80017" element={<IM80017 />} />
                        <Route path="IM79981" element={<IM79981 />} />
                        <Route path="IM79973" element={<IM79973 />} />
                        <Route path="IM79941" element={<IM79941 />} />
                        <Route path="IM79922" element={<IM79922 />} />
                        <Route path="IM79866" element={<IM79866 />} />
                        <Route path="IM79836" element={<IM79836 />} />
                    </Routes>
                </div>
            </div>
            <Footer></Footer>
            <WhatsappIcon></WhatsappIcon>
        </>
    );
};

export default App;
