import ArrowSVG from "../Icons/Arrow"
import "./ArrowHeading.css"

export const ArrowHeading = ({ children }) => {
	return (
		<div className="arrow-heading">
			<ArrowSVG />
			<h2>{children}</h2>
		</div>
	)
}
