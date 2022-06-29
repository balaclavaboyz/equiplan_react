import React from "react";
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
            <CarouselProvider
                naturalSlideWidth={4}
                naturalSlideHeight={5}
                totalSlides={Object.keys(galeria2).length}
            >
                <Slider>
                    {Object.entries(galeria2).map(
                        (t, k) => (
                            // Object.entries(t[1]).map((t, k) => (
                              <div key={k}>
                            <Slide index={k}>
                                <img src={t[1]} alt="test" />
                            </Slide>
                              </div>
                        )
                        // )
                    )}
                    {/* {Object.entries(galeria2).map((t,k)=>{
                      console.log(t[1])
                    })} */}
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            {/* <Carousel id="carousel2">
          {Object.entries(galeria2).map((t, k) =>
            Object.entries(t[1]).map((t, k) => (
              <Carousel.Item key={k}>
                <Image
                  className="d-block w-100"
                  src={t[1]}
                  alt="imagens_da_galeria_principal"
                />
            <Carousel.Caption>
              <ButtonCatalogo></ButtonCatalogo>
            </Carousel.Caption>
              </Carousel.Item>
            ))
          )}
        </Carousel> */}
        </>
    );
};

export default Galeria2;
