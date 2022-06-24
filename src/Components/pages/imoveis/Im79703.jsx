import React from 'react'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from 'react-elastic-carousel'

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
    
    const breakPoints=[
        {width:1,itemsToShow:1},
        {width:550,itemsToShow:2},
        {width:768,itemsToShow:3},
        {width:1200,itemsToShow:4},
    ]
  return (
    <>
    <Carousel breakPoints={breakPoints}>
                {Object.entries(imgs).map(
                    (t, k) => (
                            <div key={k}>
                            <img src={t[1]} alt="test" />
                            </div>
                    )
                )}

    </Carousel>
        {/* <CarouselProvider
            naturalSlideWidth={5}
            naturalSlideHeight={4}
            visibleSlides={1}
            totalSlides={Object.keys(imgs).length}
            
        >
            <Slider>
                {Object.entries(imgs).map(
                    (t, k) => (
                            <div key={k}>
                        <Slide index={k}>
                            <img src={t[1]} alt="test" />
                        </Slide>
                            </div>
                    )
                )}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider> */}
    </>
  )
}