﻿import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import InnerHTML from "dangerously-set-html-content";
export default function IM79836() {
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => {
            images[item.replace("./", "")] = r(item);
        });
        return images;
    }
    const imgs = importAll(
        require.context(
            `../../../assets/imoveis/IM79836`,
            false,
            /\.(png|jpe?g|svg|webp)$/
        )
    );
    const googleMaps = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Rua%20Amaro%20Cavalheiro,%20206%20-%20%20São%20Paulo%20/%20SP%20Apt/Sala:%20%20-%20%20Bloco:%20-%20Andar:%20&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 600px; height: 400px;"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:600px;}</style><a href="https://googlemapsiframegenerator.com" style="display:none">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:600px;}</style></div></div>`;
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
                                <h1>Casa Comercial em Pinheiros com 400m²</h1>
                                <p>
                                    Rua Amaro Cavalheiro, 206 - São Paulo / SP
                                    Apt/Sala: - Bloco: - Andar:{" "}
                                </p>
                                <p>Finalidade: Aluguel</p>
                                <p>Valor da Locação: R$ 4.000,00</p>
                                <p>Valor da Venda: R$ 0,00</p>
                                <hr />
                                <h2>Descrição</h2>
                                <p>
                                    Ar condicionado, 1 wc, varanda e mezanino.
                                    Armários de cozinha se precisar tenho
                                    disponibilidade. - Pode ser de uso
                                    residencial também. IPTU:.12x de R$334,00
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
        </>
    );
}
