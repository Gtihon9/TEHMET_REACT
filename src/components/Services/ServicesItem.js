import { Link } from "react-router-dom"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Button } from "../Button/Button"
import { ShareIcon } from "../Icons/ShareIcon"
import "./ServicesItem.css"

export const ServicesItem = ({ service }) => {
   return (
      <div className="services-item">
         <div className="services-item-content">
            <ArrowHeading title={service.title} description={service.description} />
            <Link to={service.link}>
               <Button className="services-item-content-button">
                  Подробнее
                  <ShareIcon />
               </Button>
            </Link>
         </div>
         <div className="services-item-image">
            <img alt={service.title} src={service.image} />
         </div>
      </div>
   )
}