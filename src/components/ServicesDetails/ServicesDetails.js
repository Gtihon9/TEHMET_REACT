import { useParams } from "react-router-dom"
import { servicesDetails } from "./ServicesDetails.constants"
import { Link } from "react-router-dom"
import LeftArrowSVG from "../Icons/L_Arrow"
import "./ServicesDetails.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { WorkStages } from "../WorkStages/WorkStages"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { OtherStages } from "./OtherStages"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"

export const ServicesDetails = () => {
   const { name } = useParams()

   const details = servicesDetails[name]

   return (
      <main>
         <div className="container">
            <div className="services-details-content">
               <div className="breadcrumbs">
                  <LeftArrowSVG />
                  <div className="breadcrumbs-text">
                     <Link to="/">Главная</Link>/<Link to="/services">Услуги</Link>/
                     <Link to={`/services/${name}`}>{details.title}</Link>
                  </div>
               </div>

               <SectionHeading title={details.title} description={details.description} className="details-heading-section" />

               <WorkStages />

               <ArrowHeading title="Галерея" />
               <div className="work-stages-gallery">
                  {details.images.map((image, index) => (
                     <img alt={name + index} src={image} />
                  ))}
               </div>

               <div className="works-stages-gallery-mobile">
                  <MobileSwiper images={details.images} />
               </div>

               <OtherStages />

            </div>
         </div>
         <div className="background-container-2">
            <ExtendedContactForm />
         </div>
      </main>
   )
}
