import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "./MobileSwiper.css"

export const MobileSwiper = ({ images }) => {
   return (
      <Swiper
         className="mobile-swiper"
         loop
         autoHeight
         modules={[Pagination]}
         pagination={{
            clickable: true
         }}
      >
         {images.map((image, index) => (
            <SwiperSlide key={index}>
               <img src={image} />
            </SwiperSlide>
         ))}
      </Swiper>
   )
}
