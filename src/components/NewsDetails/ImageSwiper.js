import { useState } from "react"
import { useBreakpointValue } from "../../hooks/useBreakpointValue"
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { newsImages } from './NewsDetails.constants'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./ImageSwiper.css"

export const ImageSwiper = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const isDesktop = useBreakpointValue({
      xs: false,
      sm: false,
      md: false,
      lg: true,
      xl: true
   })

   return (
      <div className="news-details-images">
         <Swiper
            style={{
               '--swiper-navigation-color': '#ffffff',
               '--swiper-pagination-color': '#ffffff',
            }}
            spaceBetween={10}
            loop
            navigation
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Pagination, Navigation, Thumbs, A11y]}
            autoHeight
            className="main-swiper"
         >
            {newsImages.map((item) => (
               <SwiperSlide>
                  <img key={`main-${item.id}`} alt={item.id} src={item.imageUrl} />
               </SwiperSlide>
            ))}
         </Swiper>
         {isDesktop &&
            <Swiper
               onSwiper={setThumbsSwiper}
               spaceBetween={10}
               watchSlidesProgress={true}
               modules={[Navigation, Thumbs]}
               className="thumbs-swiper"
               breakpoints={{
                  320: {
                     slidesPerView: 2,
                  },
                  640: {
                     slidesPerView: 3,
                  },
                  1280: {
                     slidesPerView: 4,
                  }
               }}
            >
               {newsImages.map((item) => (
                  <SwiperSlide>
                     <img key={`thumb-${item.id}`} alt={item.id} src={item.imageUrl} />
                  </SwiperSlide>
               ))}
            </Swiper>
         }
      </div>
   )
}
