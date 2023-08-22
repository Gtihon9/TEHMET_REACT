import { Link } from "react-router-dom"
import { LogoIcon } from "../Icons/LogoIcon"
import "./Logo.css"

export const Logo = () => {
   return (
      <Link to="/" className="logo">
         <LogoIcon />
      </Link>
   )
}
