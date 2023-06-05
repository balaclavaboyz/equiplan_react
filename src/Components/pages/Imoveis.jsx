import React from "react";
import { Link } from "react-router-dom";
import "../../assets/table.css";
import "../../assets/table.js";
<<<<<<< HEAD
import logo from '../../assets/galeria_2/2.png'
import IM83364 from '../../assets/imoveis/IM83364/0.jpg'
import IM83706 from '../../assets/imoveis/IM83706/0.jpg'
=======
import IM83706 from '../../assets/imoveis/IM83706/0.png'
>>>>>>> 144554919bc8ca84d3cc4d79b67fb3ef2f1c6c32
import IM83801 from '../../assets/imoveis/IM83801/0.jpg'
import IM81063 from '../../assets/imoveis/IM81063/0.jpg'
import IM81709 from '../../assets/imoveis/IM81709/0.jpg'
import im73832 from '../../assets/imoveis/IM73832/0.jpg'
import im83699 from '../../assets/imoveis/IM83699/0.png'
import im80959 from '../../assets/imoveis/IM80959/0.jpg'
import im83609 from '../../assets/imoveis/IM83609/0.jpg'
import './span.css'

export default function Imoveis() {
    return (
        <>
            <div className="container">
                <div className="indice_imoveis_wrapper">
                    <div className="grid">
                        <span id='insert'></span>
                        <div><a href="/IM83364"><div className="inside_image">IM83364</div><img src={IM83364} alt="link imovel IM83364" ></img></a></div>
                        <div><a href="/IM83706"><div className="inside_image">IM83706</div><img src={IM83706} alt="link imovel IM83706" ></img></a></div>
                        <div><a href="/IM83801"><div className="inside_image">IM83801</div><img src={IM83801} alt="link imovel IM83801" ></img></a></div>
                        <div><a href="/IM81063"><div className="inside_image">IM81063</div><img src={IM81063} alt="link imovel IM81063" ></img></a></div>
                        <div><a href="/IM81709"><div className="inside_image">IM81709</div><img src={IM81709} alt="link imovel IM81709" ></img></a></div>
                        <div><a href="/im73832"><div className="inside_image">IM73832</div><img src={im73832} alt="link imovel im73832" ></img></a></div>
                        <div><a href="/im80959"><div className="inside_image">IM80959</div><img src={im80959} alt="link imovel im80959" ></img></a></div>
                        <div><a href="/im83699"><div className="inside_image">IM83699</div><img src={im83699} alt="link imovel im83699" ></img></a></div>
						<div><a href="/im83609"><div className="inside_image">IM83609</div><img src={im83609} alt="link imovel im83609" ></img></a></div>
                    </div>
                </div>
            </div>
        </>
    );
}
