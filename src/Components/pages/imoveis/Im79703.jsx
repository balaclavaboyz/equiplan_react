import React from "react";
import StraightenIcon from "@mui/icons-material/Straighten";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DescriptionIcon from "@mui/icons-material/Description";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import InnerHTML from "dangerously-set-html-content";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "react-elastic-carousel";

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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const googleMaps = `<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=rua%20guararapes%20669%20lapa&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style="width: 600px; height: 400px;"></iframe><style>.mapouter{position:relative;text-align:right;height:400px;width:600px;}</style><a href="https://googlemapsiframegenerator.com" style="display:none">Google Maps Iframe Generator - Free Html Embed Code</a><style>.gmap_canvas{overflow:hidden;background:none!important;height:400px;width:600px;}</style></div></div>`;
  return (
    <>
      <div className="imoveis_imgs">
        {Object.entries(imgs).map((t, k) => (
          <div key={k}>
            <a href={t[1]} target="_blank" rel="noopener noreferrer">
              <img src={t[1]} alt="test" />
            </a>
          </div>
        ))}
      </div>

      <div className="imoveis_desp">
        <hr />
        {/*titulo  */}
        <h1>Casa em Lapa com 200m²</h1>
        {/* endereco */}
        <p>Rua Guararapes, 669, Lapa, São Paulo / SP - 5077051</p>
        {/* preco */}
        <p>Aluguel R$ 4.000,00</p>
        {/* icons emoji com info */}
        <div className="imoveis_specs">
          <div className="imoveis_specs_pos">
            <StraightenIcon></StraightenIcon>
            200m²
          </div>
          <div className="imoveis_specs_pos">
            <SensorDoorOutlinedIcon></SensorDoorOutlinedIcon>1 suite 5 quartos
          </div>
          <div className="imoveis_specs_pos">
            <DirectionsCarIcon></DirectionsCarIcon>1 vaga
          </div>
          {/* metro quadrado, quantos quartos, banheiros, vaga de carro, andar do ape, mobilias e prox do metro */}
        </div>
        {/* descripcao do imovel */}
        <hr />
        <h2>Descrição</h2>
        <p>
          Parte inferior: 3 dormitórios (suíte), banheiro, sala jantar, sala
          social Parte superior: 2 dormitórios, sala, cozinha, banheiro,
          garagem, edícula e quintal IPTU:.R$1.100,00 p/mês
        </p>
        <hr />
        <InnerHTML className="center" html={googleMaps}></InnerHTML>
      </div>
    </>
  );
}
