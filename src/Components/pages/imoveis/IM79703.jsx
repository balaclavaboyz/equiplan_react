import React from "react";
import InnerHTML from "dangerously-set-html-content";

export default function IM79703() {
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }
    const imgs = importAll(
        require.context(
            `../../../assets/imoveis/IM79703`,
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );

    const googleMaps = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=rua%20guararapes%20669%20lapa&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 600px; height: 400px;"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:600px;}</style><a href="https://googlemapsiframegenerator.com" style="display:none">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:600px;}</style></div></div>`;
    return (
        <>
            <div className="container_imoveis_menu container">
            <div className="imoveis_context">
                <div className="imovelGaleria">
                    <div className="imoveis_imgs">
                        {Object.entries(imgs).map((t, k) => (
                            <div key={k}>
                                <a
                                    href={t[1]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src={t[1]} alt="test" />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="imoveis_desp">
                        <hr />
                        <h1>Casa em Lapa com 200m²</h1>
                        <p>
                            Rua Guararapes, 669, Lapa, São Paulo / SP - 5077051
                        </p>
                        <p>Aluguel R$ 4.000,00</p>
                        <hr />
                        <h2>Descrição</h2>
                        <p>
                            Parte inferior: 3 dormitórios (suíte), banheiro,
                            sala jantar, sala social Parte superior: 2
                            dormitórios, sala, cozinha, banheiro, garagem,
                            edícula e quintal IPTU:.R$1.100,00 p/mês
                        </p>
                        <hr />
                        <InnerHTML
                            className="center"
                            html={googleMaps}
                        ></InnerHTML>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
