import LogoImage from "../../images/logo.png"
import LogoText from "../../images/logoText.png"
import { Link } from "react-router-dom"
import "./Logo.css"

export const Logo = () => {
   return (
      <Link to="/" className="logo">
         <img className="logo-image" src={LogoImage} alt="Logo" />
         <img className="logo-image-text" src={LogoText} alt="Logo Text" />
      </Link>
   )
}
