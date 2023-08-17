import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import LeftArrowSVG from "../Icons/L_Arrow"
import RightArrowSVG from "../Icons/R_Arrow"
import { ShareIcon } from "../Icons/ShareIcon"
import "./DirectionSlide.css"

export const DirectionSlide = ({ service, swiper, slideNumber }) => {
   return (
      <div className="direction-slide">
         <div className="direction-slide-content">
            <div className="direction-slide-header">
               <h1>{service.title}</h1>
               <p>{service.description}</p>
            </div>
            <div className="direction-slide-footer">
               <div className="direction-slide-nav">
                  <div className="direction-slide-counter">
                     <p>
                        {slideNumber + 1}/
                        <span>{swiper?.slides.length}</span>
                     </p>
                  </div>
                  <div className="direction-slide-nav-buttons">
                     <button onClick={() => swiper.slidePrev()}>
                        <LeftArrowSVG />
                     </button>
                     <button onClick={() => swiper.slideNext()}>
                        <RightArrowSVG />
                     </button>
                  </div>
               </div>
               <Link to={service.link}>
                  <Button className="direction-slide-footer-button">
                     Смотреть полностью
                     <ShareIcon />
                  </Button>
               </Link>
            </div>
         </div>
         <div className="direction-slide-image">
            <img alt={service.title} src={service.image} />
         </div>
      </div>
   )
}
