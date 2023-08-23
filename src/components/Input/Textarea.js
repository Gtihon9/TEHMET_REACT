import "./Input.css"
export const Textarea = ({ name, placeholder, value, onChange, error }) => {
	return (
		<div className="input-container">
			<textarea
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				rows={5}
				className={error ? "isInvalid" : ""}
			/>
			{error && <span>*{error}</span>}
		</div>
	)
}
