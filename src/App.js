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
import IM80182 from "./Components/pages/imoveis/IM80182";
import IM80109 from "./Components/pages/imoveis/IM80109";
import IM80116 from "./Components/pages/imoveis/IM80116";

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
                        <Route path="IM80182" element={<IM80182 />} />
                        <Route path="IM80109" element={<IM80109 />} />
                        <Route path="IM80116" element={<IM80116 />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            <WhatsappIcon />
        </>
    );
};

export default App;
