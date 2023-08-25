import { useRef, useState } from "react"
import "./ResponseToVacancy.css"
import { Button } from "../Button/Button"
import { Modal } from "../Modal/Modal"
import { ConfInfo } from "../ConfInfo/ConfInfo"
import { Input } from "../Input/Input"
import { Textarea } from "../Input/Textarea"
import { ContactFormApi } from "../../api/contact-form.api"
import { useParams } from "react-router-dom"

const initialFormData = {
	name: "",
	email: "",
	phone_number: "",
	covering_letter: "",
	cv: "",
}

export const ResponseToVacancy = ({ isOpen, onClose, jobName }) => {
	const { id } = useParams()

	const [errors, setErrors] = useState({})
	const [formData, setFormData] = useState(initialFormData)

	const fileInputRef = useRef(null)

	const handleFileChange = e => {
		const cv = e.target.files[0]
		setFormData(prevData => ({ ...prevData, cv }))
	}

	const handleFileClick = () => {
		fileInputRef.current.click()
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
		setErrors(prev => ({ ...prev, [name]: null }))
	}

	const onSubmit = async e => {
		e.preventDefault()
		const submitData = new FormData()
		submitData.append("name", formData.name)
		submitData.append("email", formData.email)
		submitData.append("phone_number", formData.phone_number)
		submitData.append("covering_letter", formData.covering_letter)
		submitData.append("vacancy", id)
		submitData.append("cv", formData.cv)

		try {
			const response = await ContactFormApi.feedbackVacancy(submitData)
			if (response) {
				setFormData(initialFormData)
			}
		} catch (error) {
			setErrors(error.response.data)
		}
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
						<Input
							name="name"
							placeholder="Укажите имя..."
							type="text"
							required
							value={formData.name}
							onChange={handleChange}
							error={errors["name"]}
						/>
						<Input
							name="email"
							placeholder="Укажите e-mail..."
							type="email"
							required
							value={formData.email}
							onChange={handleChange}
							error={errors["email"]}
						/>
						<Input
							name="phone_number"
							placeholder="Укажите телефон..."
							type="tel"
							required
							value={formData.phone_number}
							onChange={handleChange}
							error={errors["phone_number"]}
						/>
						<Textarea
							name="covering_letter"
							placeholder="Сопроводительное письмо"
							required
							value={formData.covering_letter}
							onChange={handleChange}
							error={errors["covering_letter"]}
						/>
						<div className="add-resume-container">
							<button type="button" onClick={handleFileClick} className="add-resume-btn">
								{formData.cv ? "Изменить резюме" : "Прикрепить резюме"}
							</button>
							{formData.cv && <span>{formData?.cv.name}</span>}
							<input
								id="cv"
								name="cv"
								hidden
								type="file"
								accept="application/pdf, image/*"
								multiple={false}
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
