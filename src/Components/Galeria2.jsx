import React from "react";
import { Carousel,Image } from "react-bootstrap";
import ButtonCatalogo from "./ButtonCatalogo";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const galeria2 = importAll(
  require.context("../assets/galeria_2", false, /\.(png|jpe?g|svg|webp)$/)
);

const Galeria2 = () => {
  return (
    <>
        <Carousel id="carousel2">
          {Object.entries(galeria2).map((t, k) =>
            Object.entries(t[1]).map((t, k) => (
              <Carousel.Item key={k}>
                <Image
                  className="d-block"
                  src={t[1]}
                  alt="imagens_da_galeria_principal"
                />
            <Carousel.Caption>
              <ButtonCatalogo></ButtonCatalogo>
            </Carousel.Caption>
              </Carousel.Item>
            ))
          )}
        </Carousel>


    </>
  );
};

export default Galeria2;
