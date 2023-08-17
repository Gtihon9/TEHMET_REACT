import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { ShareIcon } from "../Icons/ShareIcon"
import "./Card.css"

export const Card = ({ item }) => {
   return (
      <div className="card">
         <img alt={item.title} src={item.image} className="card-image" />
         <div className="card-backdrop" />
         <div className="card-content">
            <div className="card-header">
               <h1>{item.title}</h1>
               {item.description && <p>{item.description}</p>}
            </div>
            <Link to={item.link}>
               <Button className="card-button">
                  Смотреть полностью
                  <ShareIcon />
               </Button>
            </Link>
         </div>

      </div>
   )
}
