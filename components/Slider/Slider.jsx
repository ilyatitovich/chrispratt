import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { images } from "../ImagesGrid/data";
import MagneticBtn from "../MagneticBtn/MagneticBtn";
import { v4 as uuidv4 } from "uuid";

export default function Slider({ setSliderIsOpen, initialSlide, current }) {
    const slides = images[current].map((img) => {
        return (
            <SwiperSlide key={uuidv4()}>
                <img src={img} />
            </SwiperSlide>
        );
    });

    return (
        <div className="slider-modal">
            <div
                className="btn btn-link btn-link-external"
                onClick={() => setSliderIsOpen(false)}
            >
                <MagneticBtn strength={20} strengthText={10}>
                    <span className="btn-text">
                        <span className="btn-text-inner">Close</span>
                    </span>
                </MagneticBtn>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                initialSlide={initialSlide}
                className="mySwiper"
            >
                {slides}
            </Swiper>
        </div>
    );
}
