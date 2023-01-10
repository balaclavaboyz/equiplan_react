import React from "react";
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
            {/* <div className="swiper_container_homepage">
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
                            <div key={k[0]} className="swiper_slide_homepage">
                                <img src={t[1]} alt="" style={{aspectRatio:5/5}}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div> */}
                    {Object.entries(galeria2).map((t, k) => (
                            <div key={k[0]} className="center">
                                <img src={t[1]} alt=""/>
                            </div>
                    ))}
        </>
    );
};

export default Galeria2;
