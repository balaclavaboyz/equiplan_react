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
import IM80655 from "./Components/pages/imoveis/IM80655";
import IM80045 from "./Components/pages/imoveis/IM80045";
import Manu from './Components/Manu'

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
                        <Route path="IM80045" element={<IM80045 />} />
                        <Route path="IM80655" element={<IM80655></IM80655>}></Route>
                        <Route path='1' element={<IM80045/>}></Route>
                        <Route path="2" element={<IM80655 />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            <FloatingIcons />
        </>
    );
};

export default App;
