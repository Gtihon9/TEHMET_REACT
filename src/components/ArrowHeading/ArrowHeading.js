import ArrowSVG from "../Icons/Arrow"
import "./ArrowHeading.css"

export const ArrowHeading = ({ title, description, className, ...props }) => {
	return (
		<div className={`arrow-heading ${className ? className : ""}`} {...props}>
			<div className="arrow-heading-main">
				<ArrowSVG />
				<h2>{title}</h2>
			</div>
			{description && <p>{description}</p>}
		</div>
	)
}
