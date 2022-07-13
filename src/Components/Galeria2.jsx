import React, { useState } from "react";
// import {
//     CarouselProvider,
//     Slider,
//     Slide,
//     ButtonBack,
//     ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
            <div className="swiper_container">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {Object.entries(galeria2).map((t, k) => (
                        <SwiperSlide>
                            <div key={k[0]} className="swiper_slide">
                                <img src={t[1]} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <div className="container">
                <div className="galeria_wrapper">
                    <Carousel enableAutoPlay isRTL breakPoints={breakPoints}>
                        <Galeria_homepage />
                    </Carousel>
                </div>
            </div> */}
            {/* <CarouselProvider
                naturalSlideWidth={4}
                naturalSlideHeight={5}
                totalSlides={Object.keys(galeria2).length}
            >
                <Slider>
                    {Object.entries(galeria2).map(
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
    );
};

export default Galeria2;
