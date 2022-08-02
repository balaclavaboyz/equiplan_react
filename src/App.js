import Sidebar from "./Components/Sidebar";
import "../src/assets/sidebar.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Politica from "./Components/pages/Politica";
import Faq from "./Components/pages/Faq";
import Contato from "./Components/pages/contato";
import Missao from "./Components/pages/missao";
import WhatsappIcon from "./Components/WhatsappIcon";
import Footer from "./Components/Footer";
import Imoveis from "./Components/pages/Imoveis";
import IM80221 from "./Components/pages/imoveis/IM80221";
import IM80270 from "./Components/pages/imoveis/IM80270";
import IM80301 from "./Components/pages/imoveis/IM80301";
import IM80045 from "./Components/pages/imoveis/IM80045";

const App = () => {
    return (
        <>
            <div className="main">
                <Sidebar />
                <div className="content_wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="faq" element={<Faq />} />
                        <Route path="politica" element={<Politica />} />
                        <Route path="contato" element={<Contato />} />
                        <Route path="missao" element={<Missao />} />
                        <Route path="imoveis" element={<Imoveis />} />
                        <Route path="IM80221" element={<IM80221 />} />
                        <Route path="IM80270" element={<IM80270 />} />
                        <Route path="IM80301" element={<IM80301 />} />
                        <Route path="IM80045" element={<IM80045 />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            <WhatsappIcon />
        </>
    );
};

export default App;
