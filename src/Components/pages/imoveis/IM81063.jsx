import google_maps from "../../../assets/flutuante/google_maps.png";import { Navigation, Pagination, Scrollbar } from "swiper";import { Swiper, SwiperSlide } from "swiper/react";import "swiper/css";import "swiper/css/navigation";import "swiper/css/pagination";import "swiper/css/scrollbar";import React from "react";import InnerHTML from "dangerously-set-html-content";export default function IM81063() {function importAll(r) {let images = {};r.keys().forEach((item, index) => {images[item.replace("./", "")] = r(item);});return images;}const imgs = importAll(require.context(`../../../assets/imoveis/IM81063`,false,/\.(png|jpe?g|svg|webp)$/));const googleMaps = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Alameda%20Juari,%20461%20-%20%20Barueri%20/%20SP%20Apt/Sala:%20%20-%20%20Bloco:%20-%20Andar:%20&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 100%; height: 400px;"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:100%;}</style><a href="https://googlemapsiframegenerator.com" style="display:none">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:100%;}</style></div></div>`;return (<><div className="container"><div className=""><div className=""><div className=""><div className="swiper_container"><Swiper modules={[Navigation, Pagination, Scrollbar]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }}>{Object.entries(imgs).map((t, k) => (<SwiperSlide> <div key={k[0]}className="swiper_slide"> <img src={t[1]} alt="image do imovel" /></div></SwiperSlide>))}</Swiper></div><div className="imoveis_desp"><hr /><h1>Armazém Comercial em Tamboré com 800m²</h1><p>Alameda Juari, 461 -  Barueri / SP Apt/Sala:  -  Bloco: - Andar: </p><p>Finalidade: Aluguel</p><p>Valor da Locação: R$ 25.000,00</p><p>Valor da Venda: R$ 0,00Valor Sujeito a Confimação</p><hr /><h2>Descrição</h2><p>Térreo (depósito/estoque):
400 m² Pé Direito 9m (5m sob mezanino)

Piso superior (escritório)
180 m² Pé Direito 4m

Piso inferior (depósito)
220 m² Pé Direito 4m

Terreno 575 m²

Doca e entrada para caminhão

Recuo de 16 m (estac. privativo) 200 m²

Vagas privativas(2)laterais Al.Arapoema

Rua exclusiva somente p/ os condôminos

FORO R$ 2.349,55/ano
IPTU R$ 1.252,36/ano
Socet R$ 786,44 + Ello R$ 820,00 = R$ 1.606,44/mês</p><hr /><InnerHTML className="center" html={googleMaps}></InnerHTML></div></div></div></div></div><a href="http://maps.google.com/maps?q=&layer=c&cbll=-23.5004744,-46.8283678&cbp=11,0,0,0,0"style={{position: "fixed",zIndex: 99,bottom: "190px",right: "20px",}}><img src={google_maps} /></a><p style={{backgroundColor: "lightgrey",borderRadius: "5px",padding: "5px 5px",position: "fixed",zIndex: 99,bottom: "190px",right: "104px",}}>Maps</p></>);}