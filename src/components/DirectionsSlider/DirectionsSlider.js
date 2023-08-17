import { services } from "../Services/Services.constants"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./DirectionsSlider.css"
import { DirectionSlide } from "./DirectionSlide";
import { useState } from "react";

export const DirectionsSlider = () => {
   const [slideNumber, setSlideNumber] = useState(0)
   const [swiper, setSwiper] = useState(null)

   return (
      <Swiper
         spaceBetween={80}
         speed={200}
         loop
         onSwiper={(swiper) => setSwiper(swiper)}
         onSlideChange={(swiper) => setSlideNumber(swiper.realIndex)}
      >
         {services.map((service) => (
            <SwiperSlide key={service.title}>
               <DirectionSlide service={service} swiper={swiper} slideNumber={slideNumber} />
            </SwiperSlide>
         ))}
      </Swiper>
   )
}
