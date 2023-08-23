import { useRef, useState } from "react"
import "./ResponseToVacancy.css"
import { Button } from "../Button/Button"
import { Modal } from "../Modal/Modal"
import { ConfInfo } from "../ConfInfo/ConfInfo"

export const ResponseToVacancy = ({ isOpen, onClose, jobName }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		message: "",
		resume: "",
	})

	const fileInputRef = useRef(null)

	const handleFileChange = e => {
		const resume = e.target.files[0]
		setFormData(prevData => ({ ...prevData, resume }))
	}

	const handleFileClick = () => {
		fileInputRef.current.click()
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const onSubmit = e => {
		e.preventDefault()

		console.log(formData)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} maxWidth={774}>
			<div className="response-vacancy-container">
				<div className="response-vacancy-header">
					<h1>Отклик на вакансию:</h1>
					<p>{jobName}</p>
				</div>
				<form method="POST" onSubmit={onSubmit}>
					<div className="response-vacancy-form">
						<input
							name="name"
							placeholder="Укажите имя..."
							type="text"
							required
							value={formData.name}
							onChange={handleChange}
						/>
						<input
							name="email"
							placeholder="Укажите e-mail..."
							type="email"
							required
							value={formData.email}
							onChange={handleChange}
						/>
						<input
							name="phoneNumber"
							placeholder="Укажите телефон..."
							type="tel"
							required
							value={formData.phoneNumber}
							onChange={handleChange}
						/>
						<textarea
							name="message"
							placeholder="Сопроводительное письмо"
							required
							value={formData.message}
							onChange={handleChange}
						/>
						<div className="add-resume-container">
							<button type="button" onClick={handleFileClick} className="add-resume-btn">
								{formData.resume ? "Изменить резюме" : "Прикрепить резюме"}
							</button>
							{formData.resume && <span>{formData?.resume.name}</span>}
							<input
								id="resume"
								name="resume"
								hidden
								type="file"
								accept="application/pdf, image/*"
								multiple={false}
								required
								ref={fileInputRef}
								onChange={handleFileChange}
							/>
						</div>
					</div>
					<div className="response-vacancy-footer">
						<Button type="submit">Отправить</Button>
						<ConfInfo />
					</div>
				</form>
			</div>
		</Modal>
	)
}
