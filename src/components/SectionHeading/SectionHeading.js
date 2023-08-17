import "./SectionHeading.css"

export const SectionHeading = ({ title, description, ...props }) => {
	return (
		<div className="section-heading" {...props}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}
