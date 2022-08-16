import Sidebar from "./Components/Sidebar";
import "../src/assets/sidebar.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import Politica from "./Components/pages/Politica";
import Faq from "./Components/pages/Faq";
import Contato from "./Components/pages/contato";
import Missao from "./Components/pages/missao";
import FloatingIcons from "./Components/WhatsappIcon";
import Footer from "./Components/Footer";
import Imoveis from "./Components/pages/Imoveis";
import IM80442 from "./Components/pages/imoveis/IM80442";
import IM79968 from "./Components/pages/imoveis/IM79968";
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
                        <Route path="IM80442" element={<IM80442 />} />
                        <Route path="IM79968" element={<IM79968 />} />
                        <Route path="IM80045" element={<IM80045 />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            <FloatingIcons />
        </>
    );
};

export default App;
