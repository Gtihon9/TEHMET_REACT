import ArrowSVG from "../Arrow"
import "./ArrowHeading.css"

const ArrowHeading = ({ children }) => {
   return (
      <div className="arrow-heading">
         <ArrowSVG />
         <h2>{children}</h2>
      </div>
   )
}

export default ArrowHeading