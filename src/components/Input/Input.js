import "./Input.css"

export const Input = ({ name, placeholder, value, onChange, type = "text", error }) => {
	return (
		<div className="input-container">
			<input
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				type={type}
				className={error ? "isInvalid" : ""}
			/>
			{error && <span>*{error}</span>}
		</div>
	)
}
