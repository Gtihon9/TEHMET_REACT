import { useParams } from "react-router-dom"
import { otherServices, servicesDetails } from "./ServicesDetails.constants"
import { Link } from "react-router-dom"
import LeftArrowSVG from "../Icons/L_Arrow"
import RightArrowSVG from "../Icons/R_Arrow"
import "./ServicesDetails.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { WorkStages } from "../WorkStages/WorkStages"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from "react"
import { Card } from "../Card/Card"

export const ServicesDetails = () => {
   const [swiperState, setSwiperState] = useState({
      isBeginning: true,
      isEnd: false
   })
   const [swiper, setSwiper] = useState(null)

   const { name } = useParams()

   const details = servicesDetails[name]

   return (
      <>
         <main className="container services-details-content">
            <div className="breadcrumbs">
               <LeftArrowSVG />
               <div className="breadcrumbs-text">
                  <Link to="/">Главная</Link>/<Link to="/services">Услуги</Link>/
                  <Link to={`/services/${name}`}>{details.title}</Link>
               </div>
            </div>

            <SectionHeading title={details.title} description={details.description} />

            <WorkStages />

            <ArrowHeading title="Галерея" style={{ marginTop: 90 }} />
            <div className="work-stages-gallery">
               {details.images.map((image, index) => (
                  <img alt={name + index} src={image} />
               ))}
            </div>

            <div className="work-stages-other">
               <div className="work-stages-other-header">
                  <ArrowHeading title="Другие услуги" />
                  <div className="work-stages-other-header-nav">
                     <button onClick={() => swiper.slidePrev()} className={swiperState.isBeginning ? "disabled" : ""}>
                        <LeftArrowSVG />
                     </button>
                     <button onClick={() => swiper.slideNext()} className={swiperState.isEnd ? "disabled" : ""}>
                        <RightArrowSVG />
                     </button>
                  </div>
               </div>
               <Swiper
                  spaceBetween={40}
                  slidesPerView={2}
                  onSwiper={(swiper) => setSwiper(swiper)}
                  onSlideChange={(swiper) => setSwiperState({
                     isBeginning: swiper.isBeginning,
                     isEnd: swiper.isEnd
                  })}
               >
                  {otherServices.filter((item) => !item.link.includes(name)).map((service) => (
                     <SwiperSlide>
                        <Card key={service.title} item={service} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>

         </main>
         <div className="background-container-2">
            <ExtendedContactForm />
         </div>
      </>
   )
}
