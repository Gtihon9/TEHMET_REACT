import "./Spinner.css"

export const Spinner = ({ minHeight = "70vh" }) => {
	return (
		<div className="spinner-container" style={{ minHeight }}>
			<div className="loading-spinner" />
		</div>
	)
}
