﻿import React from "react";import InnerHTML from "dangerously-set-html-content";export default function IM79908() {function importAll(r) {let images = {};r.keys().forEach((item, index) => {images[item.replace("./", "")] = r(item);});return images;}const imgs = importAll(require.context(`../../../assets/imoveis/IM79908`,false,/\.(png|jpe?g|svg|webp)$/));const googleMaps = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Rua%20Doutor%20Jesuíno%20Maciel,%201459%20-%20%20São%20Paulo%20/%20SP%20Apt/Sala:%20%20-%20%20Bloco:%20-%20Andar:%20&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 600px; height: 400px;"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:600px;}</style><a href="https://googlemapsiframegenerator.com" style="display:none">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:600px;}</style></div></div>`;return (<><div className="container_imoveis_menu container"><div className="imoveis_context"><div className="imovelGaleria"><div className="imoveis_imgs">{Object.entries(imgs).map((t, k) => (<div key={k}><a href={t[1]} target="_blank" rel="noopener noreferrer"><img src={t[1]} alt="test" /></a></div>))}</div><div className="imoveis_desp"><hr /><h1>Casa em Campo Belo com 160m²</h1><p>Rua Doutor Jesuíno Maciel, 1459 -  São Paulo / SP Apt/Sala:  -  Bloco: - Andar: </p><p>Finalidade: Venda e Aluguel</p><p>Valor da Locação: R$ 5.200,00</p><p>Valor da Venda: R$ 990.000,00</p><hr /><h2>Descrição</h2><p>Casa com 3 dormitórios sendo 1 suíte, 4 banheiros e garagem p/ 2 carros.

IPTU:.R$430,00</p><hr /><InnerHTML className="center" html={googleMaps}></InnerHTML></div></div></div></div></>);}