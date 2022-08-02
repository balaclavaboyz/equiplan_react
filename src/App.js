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
<<<<<<< HEAD
import IM80198 from "./Components/pages/imoveis/IM80198";
import IM80221 from "./Components/pages/imoveis/IM80221";
import IM80270 from "./Components/pages/imoveis/IM80270";
import IM80301 from "./Components/pages/imoveis/IM80301";
=======
import IM80116 from "./Components/pages/imoveis/IM80116";
import IM80109 from "./Components/pages/imoveis/IM80109";
import IM80182 from "./Components/pages/imoveis/IM80182";
>>>>>>> ce8f0dd4e8bb990c54566367c98751c98ea76d7e
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
<<<<<<< HEAD
                        <Route path="IM80198" element={<IM80198 />} />
                        <Route path="IM80221" element={<IM80221 />} />
                        <Route path="IM80270" element={<IM80270 />} />
                        <Route path="IM80301" element={<IM80301 />} />
=======
                        <Route path="IM80116" element={<IM80116 />} />
                        <Route path="IM80109" element={<IM80109 />} />
                        <Route path="IM80182" element={<IM80182 />} />
>>>>>>> ce8f0dd4e8bb990c54566367c98751c98ea76d7e
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
