import React from "react";
import { Link } from "react-router-dom";
import "../../assets/table.css";
import "../../assets/table.js";
import logo from '../../assets/galeria_2/2.png'
import im80045 from '../../assets/imoveis/IM80045/0.jpg'
import im80655 from '../../assets/imoveis/IM80655/0.jpg'
import im80959 from '../../assets/imoveis/IM80959/0.jpg'
import im81289 from '../../assets/imoveis/IM81289/0.jpg'
import im81362 from '../../assets/imoveis/IM81362/0.jpg'

export default function Imoveis() {
    return (
        <>
            <div className="container">
                <div className="indice_imoveis_wrapper">
                    {/* <table className="rtable rtable--flip">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Título</th>
                                <th>Tipo</th>
                                <th>Locação</th>
                                <th>Venda</th>
                            </tr>
                        </thead>
                        <tbody>
                            <span id="insertion_table"></span>
<tr id="IM81289"><th><Link to="/IM81289">IM81289</Link></th><th>Casa em Vila Parque Jabaquara com 570m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.400.000,00</th></tr>
<tr id="IM81362"><th><Link to="/IM81362">IM81362</Link></th><th>Casa em Vila Cordeiro com 120m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.300.000,00</th></tr>
<tr id="IM80959"><th><Link to="/IM80959">IM80959</Link></th><th>Prédio Comercial + Galpão em Jaraguá com 700m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.590.000,00</th></tr>
<tr id="IM80655"><th><Link to="/IM80655">IM80655</Link></th><th>Casa em Alto da Lapa com 297m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 2.438.000,00</th></tr>
<tr id="IM80045"><th><Link to="/IM80045">IM80045</Link></th><th>Casa em Brooklin Paulista com 174m²</th><th>Venda</th><th>R$ 0,00</th><th>R$ 1.450.000,00</th></tr>
                        </tbody>
                    </table> */}
                    <div className="grid">
                        <div><a href="/im81289"><div className="inside_image">IM81289</div><img src={im81289} alt="link imovel im81289" ></img></a></div>
                        <div><a href="/im81362"><div className="inside_image">IM81362</div><img src={im81362} alt="link imovel im81362" ></img></a></div>
                        <div><a href="/im80959"><div className="inside_image">IM80959</div><img src={im80959} alt="link imovel im80959" ></img></a></div>
                        <div><a href="/im80655"><div className="inside_image">IM80655</div><img src={im80655} alt="link imovel im80655" ></img></a></div>
                        <div><a href="/im80045"><div className="inside_image">IM80045</div><img src={im80045} alt="link imovel im80045" ></img></a></div>
                    </div>
                </div>
            </div>
        </>
    );
}
