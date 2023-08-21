import "./SectionHeading.css"

export const SectionHeading = ({ title, description, className, ...props }) => {
	return (
		<div className={`section-heading ${className ? className : ""}`} {...props}>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}
