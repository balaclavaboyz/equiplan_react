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
import IM80117 from "./Components/pages/imoveis/IM80117";
import IM80133 from "./Components/pages/imoveis/IM80133";
import IM80017 from "./Components/pages/imoveis/IM80017";
import IM80045 from "./Components/pages/imoveis/IM80045";
import IM79981 from "./Components/pages/imoveis/IM79981";

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
                        <Route path="IM80117" element={<IM80117 />} />
                        <Route path="IM80133" element={<IM80133 />} />
                        <Route path="IM80017" element={<IM80017 />} />
                        <Route path="IM80045" element={<IM80045 />} />
                        <Route path="IM79981" element={<IM79981 />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            <WhatsappIcon />
        </>
    );
};

export default App;
