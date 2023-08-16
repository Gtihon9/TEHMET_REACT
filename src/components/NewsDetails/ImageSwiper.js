import { useState } from "react"
import { useBreakpointValue } from "../../hooks/useBreakpointValue"
import { Navigation, Pagination, A11y, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import News1 from "../../images/news1.png"
import NewsDetails1 from "../../images/newsDetails1.png"
import NewsDetails2 from "../../images/newsDetails2.png"
import NewsDetails3 from "../../images/newsDetails3.png"
import NewsDetails4 from "../../images/newsDetails4.png"
import "./ImageSwiper.css"

export const ImageSwiper = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);

   const amountOfThumbs = useBreakpointValue({
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
   })

   const isDesktop = useBreakpointValue({
      xs: false,
      sm: false,
      md: false,
      lg: true,
      xl: true
   })

   console.log(isDesktop);

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
            className="main-swiper"
         >
            {images.map((item) => (
               <SwiperSlide>
                  <img key={`main-${item.id}`} alt={item.id} src={item.imageUrl} />
               </SwiperSlide>
            ))}
         </Swiper>
         {isDesktop &&
            <Swiper
               onSwiper={setThumbsSwiper}
               spaceBetween={10}
               slidesPerView={amountOfThumbs}
               watchSlidesProgress={true}
               modules={[Navigation, Thumbs]}
               className="thumbs-swiper"
            >
               {images.map((item) => (
                  <SwiperSlide>
                     <img key={`thumb-${item.id}`} alt={item.id} src={item.imageUrl} />
                  </SwiperSlide>
               ))}
            </Swiper>
         }
      </div>
   )
}


const images = [
   {
      id: 1,
      imageUrl: News1,
   },
   {
      id: 2,
      imageUrl: NewsDetails1,
   },
   {
      id: 3,
      imageUrl: NewsDetails2,
   },
   {
      id: 4,
      imageUrl: NewsDetails3,
   },
   {
      id: 5,
      imageUrl: NewsDetails4,
   },
]
