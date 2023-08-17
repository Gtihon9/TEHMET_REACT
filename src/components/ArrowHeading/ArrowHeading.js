import ArrowSVG from "../Icons/Arrow"
import "./ArrowHeading.css"

export const ArrowHeading = ({ title, description, ...props }) => {
	return (
		<div className="arrow-heading" {...props}>
			<div className="arrow-heading-main">
				<ArrowSVG />
				<h2>{title}</h2>
			</div>
			{description && <p>{description}</p>}
		</div>
	)
}
