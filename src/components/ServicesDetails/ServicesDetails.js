import { useParams } from "react-router-dom"
import { servicesDetails } from "./ServicesDetails.constants"
import { Link } from "react-router-dom"
import LeftArrowSVG from "../Icons/L_Arrow"
import "./ServicesDetails.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { WorkStages } from "../WorkStages/WorkStages"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { OtherStages } from "./OtherStages"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { motion } from "framer-motion"

export const ServicesDetails = () => {
   const { name } = useParams()

   const details = servicesDetails[name]

   return (
      <motion.main
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      >
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
      </motion.main>
   )
}
