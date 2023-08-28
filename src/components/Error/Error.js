import "./Error.css"

export const Error = () => {
	return (
		<div className="error-container">
			<h1 className="error-title">Что-то пошло не так :(</h1>
			<p className="error-message">
				Страница не отвечает. Вернитесь обратно или попробуйте чуть позже.
			</p>
		</div>
	)
}
