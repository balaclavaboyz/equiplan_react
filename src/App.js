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
import IM81709 from "./Components/pages/imoveis/IM81709";
import IM73832 from "./Components/pages/imoveis/IM73832";
import IM83699 from "./Components/pages/imoveis/IM83699";
import IM83609 from "./Components/pages/imoveis/IM83609";
import IM81362 from "./Components/pages/imoveis/IM81362";
import IM80959 from "./Components/pages/imoveis/IM80959";
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
                        {/* <Route path="missao" element={<Missao />} /> */}
                        <Route path="imoveis" element={<Imoveis />} />
                        <Route path="IM81709" element={<IM81709 />} />
                        <Route path="IM73832" element={<IM73832 />} />
                        <Route path="IM83699" element={<IM83699 />} />
                        <Route path="IM83609" element={<IM83609 />} />
                        <Route path="IM81362" element={<IM81362 />} />
                        <Route path="IM80959" element={<IM80959 />} />
                        <Route path="IM80045" element={<IM80045 />} />
                        <Route path="IM80655" element={<IM80655></IM80655>}></Route>
                        <Route path='1' element={<IM80045 />}></Route>
                        <Route path="2" element={<IM80655 />} />
                        <Route path='3' element={<IM80959></IM80959>}></Route>
                        <Route path="5" element={<IM81362 />} />
                    </Routes>
                </div>
            </div>
            <Footer />
            {/* <FloatingIcons /> */}
        </>
    );
};

export default App;
