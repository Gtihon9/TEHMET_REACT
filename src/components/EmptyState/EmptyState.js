import "./EmptyState.css"

export const EmptyState = ({
	text = "По вашему запросу ничего не найдено :(",
	description = "Попробуйте изменить запрос",
}) => {
	return (
		<div className="empty-state">
			<h2>{text}</h2>
			<p>{description}</p>
		</div>
	)
}
