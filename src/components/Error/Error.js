import "./Error.css"

export const Error = ({
	title = "Что-то пошло не так :(",
	message = "Страница не отвечает. Вернитесь обратно или попробуйте чуть позже.",
}) => {
	return (
		<div className="error-container">
			<h1 className="error-title">{title}</h1>
			<p className="error-message">{message}</p>
		</div>
	)
}
