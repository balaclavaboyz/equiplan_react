import { Navigation, Pagination, Scrollbar } from "swiper";import { Swiper, SwiperSlide } from "swiper/react";import "swiper/css";import "swiper/css/navigation";import "swiper/css/pagination";import "swiper/css/scrollbar";import React from "react";import InnerHTML from "dangerously-set-html-content";export default function IM80270() {function importAll(r) {let images = {};r.keys().forEach((item, index) => {images[item.replace("./", "")] = r(item);});return images;}const imgs = importAll(require.context(`../../../assets/imoveis/IM80270`,false,/\.(png|jpe?g|svg|webp)$/));const googleMaps = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Rua%20Doutor%20Diogo%20de%20Faria,%20109%20-%20%20São%20Paulo%20/%20SP%20Apt/Sala:%20%20-%20%20Bloco:%20-%20Andar:%20&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 100%; height: 400px;"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:100%;}</style><a href="https://googlemapsiframegenerator.com" style="display:none">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:100%;}</style></div></div>`;return (<><div className="container"><div className=""><div className=""><div className=""><div className="swiper_container"><Swiper modules={[Navigation, Pagination, Scrollbar]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} scrollbar={{ draggable: true }}>{Object.entries(imgs).map((t, k) => (<SwiperSlide> <div key={k[0]}className="swiper_slide"> <img src={t[1]} alt="image do imovel" /></div></SwiperSlide>))}</Swiper></div><div className="imoveis_desp"><hr /><h1>Casa em Vila Clementino com 280m²</h1><p>Rua Doutor Diogo de Faria, 109 -  São Paulo / SP Apt/Sala:  -  Bloco: - Andar: </p><p>Finalidade: Venda</p><p>Valor da Locação: R$ 0,00</p><p>Valor da Venda: R$ 3.500.000,00</p><hr /><h2>Descrição</h2><p>Vaga par 3 carros na frente, 2 carros lateral e 2 carros na garagem (total 7 vagas) . 
Andar de cima : 
3 quartos sendo 1 suíte, todos com armários. 1 banheiro entre dois quartos 
Chuveiros com aquecedor central dentro do box, equipamento novo. 
Escada em madeira maciça fazendo a transição dos andares.  
Andar de baixo : 
- Hall de entrada amplo em dois níveis 
- sala em granito para dois ambientes 
- copa ampla 
- cozinha ampla 
- armário de dispensa 
- sala de lareira 
- lavabo amplo 
- escritório 
- lavanderia ampla em dois níveis 
- studio amplo em dois níveis
Área externa 
- jardim interno e externo feito por paisagista em toda extensão da casa 
- área gourmet externa com churrasqueira 
- árvore ameixeira 
- acesso as áreas internas pela copa e por lindas portas de madeira maciça e vidros que dão para 2 vagas. 
Cerca serpentina em toda extensão do imóvel para segurança.</p><hr /><InnerHTML className="center" html={googleMaps}></InnerHTML></div></div></div></div></div></>);}