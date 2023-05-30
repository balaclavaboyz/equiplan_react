import React from "react";
import { Link } from "react-router-dom";
import "../../assets/table.css";
import "../../assets/table.js";
import logo from '../../assets/galeria_2/2.png'
import im80045 from '../../assets/imoveis/IM80045/0.jpg'
import im80655 from '../../assets/imoveis/IM80655/0.jpg'
import im80959 from '../../assets/imoveis/IM80959/0.jpg'
import im81362 from '../../assets/imoveis/IM81362/0.jpg'
import im83609 from '../../assets/imoveis/IM83609/0.jpg'
import './span.css'

export default function Imoveis() {
    return (
        <>
            <div className="container">
                <div className="indice_imoveis_wrapper">
                    <div className="grid">
                        <span id='insert'></span>
                        <div><a href="/im80959"><div className="inside_image">IM80959</div><img src={im80959} alt="link imovel im80959" ></img></a></div>
                        <div><a href="/im80655"><div className="inside_image">IM80655</div><img src={im80655} alt="link imovel im80655" ></img></a></div>
                        <div><a href="/im80045"><div className="inside_image">IM80045</div><img src={im80045} alt="link imovel im80045" ></img></a></div>
						<div><a href="/im83609"><div className="inside_image">IM83609</div><img src={im83609} alt="link imovel im83609" ></img></a></div>
                        <div><a href="/im81362"><div className="inside_image">IM81362</div><img src={im81362} alt="link imovel im81362" ></img></a></div>
                    </div>
                </div>
            </div>
        </>
    );
}
