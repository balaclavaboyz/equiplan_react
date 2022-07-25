﻿import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import InnerHTML from "dangerously-set-html-content";
// add
import google_maps from "../../../assets/flutuante/google_maps.png";
export default function IM80045() {
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }
    const imgs = importAll(
        require.context(
            `../../../assets/imoveis/IM80045`,
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const googleMaps = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Rua%20Luisiania,%20718%20-%20%20São%20Paulo%20/%20SP%20Apt/Sala:%20%20-%20%20Bloco:%20-%20Andar:%20&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 100%; height: 400px;"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:100%;}</style><a href="https://googlemapsiframegenerator.com" style="display:none">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:100%;}</style></div></div>`;
    return (
        <>
            <div className="container">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="swiper_container">
                                <Swiper
                                    modules={[
                                        Navigation,
                                        Pagination,
                                        Scrollbar,
                                    ]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                >
                                    {Object.entries(imgs).map((t, k) => (
                                        <SwiperSlide>
                                            {" "}
                                            <div
                                                key={k[0]}
                                                className="swiper_slide"
                                            >
                                                {" "}
                                                <img
                                                    src={t[1]}
                                                    alt="image do imovel"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className="imoveis_desp">
                                <hr />
                                <h1>Casa em Brooklin Paulista com 174m²</h1>
                                <p>
                                    Rua Luisiania, 718 - São Paulo / SP
                                    Apt/Sala: - Bloco: - Andar:{" "}
                                </p>
                                <p>Finalidade: Venda</p>
                                <p>Valor da Locação: R$ 0,00</p>
                                <p>Valor da Venda: R$ 1.450.000,00</p>
                                <hr />
                                <h2>Descrição</h2>
                                <p>
                                    Casa com 3 dormitórios, 1 banheiro social,
                                    sala 2 ambientes, lavabo, cozinha, copa,
                                    quintal com entrada lateral. Nos fundos
                                    lavanderia e um salão com banheiro, garagem
                                    coberta p/ 3 carros. IPTU:.R$497,74
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
            </div>
            <a
                href=""
                style={{
                    position: "fixed",
                    zIndex: 99,
                    bottom: "190px",
                    right: "20px",
                }}
            >
                <img src={google_maps} alt="" />
            </a>
            <p
                style={{
                    backgroundColor: "lightgrey",
                    borderRadius: "5px",
                    padding: "5px 5px",
                    position: "fixed",
                    zIndex: 99,
                    bottom: "190px",
                    right: "104px",
                }}
            >
                Maps
            </p>
        </>
    );
}
