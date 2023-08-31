import "./ResponseToVacancy.css"
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal"
import { Button } from "../Button/Button"
import { ConfInfo } from "../ConfInfo/ConfInfo"
import { Input } from "../Input/Input"
import { Textarea } from "../Input/Textarea"
import { useParams } from "react-router-dom"
import { useRef, useState } from "react"
import { ContactFormApi } from "../../api/contact-form.api"
import ReCAPTCHA from "react-google-recaptcha"

const initialFormData = {
	name: "",
	email: "",
	phone_number: "",
	covering_letter: "",
	cv: "",
}

export const ResponseToVacancy = ({ isOpen, onClose, jobName }) => {
	const { id } = useParams()

	const captchaRef = useRef(null)
	const [errors, setErrors] = useState({})
	const [formData, setFormData] = useState(initialFormData)

	const fileInputRef = useRef(null)

	const handleFileChange = e => {
		const cv = e.target.files[0]
		setFormData(prevData => ({ ...prevData, cv }))
		setErrors(prev => ({ ...prev, cv: null }))
	}

	const handleFileClick = () => {
		fileInputRef.current.click()
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
		setErrors(prev => ({
			...prev,
			[name]: null,
			captcha: null,
		}))
	}

	const handleCaptchaChange = () => {
		setErrors(prev => ({
			...prev,
			captcha: null,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		const captchaValue = captchaRef.current.getValue()
		const submitData = new FormData()
		submitData.append("name", formData.name)
		submitData.append("email", formData.email)
		submitData.append("phone_number", formData.phone_number)
		submitData.append("covering_letter", formData.covering_letter)
		submitData.append("vacancy", id)
		submitData.append("cv", formData.cv)

		try {
			const response = await ContactFormApi.feedbackVacancy(submitData)
			if (!captchaValue) {
				setErrors(prev => ({ ...prev, captcha: "error" }))
				return
			}
			if (response) {
				setFormData(initialFormData)
				captchaRef.current.reset()
				onClose()
			}
		} catch (error) {
			setErrors(error.response.data)
		}
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} className="jobs-modal">
			<ModalOverlay className="jobs-modal-overlay" />
			<ModalContent className="jobs-modal-content">
				<ModalHeader className="jobs-modal-header">
					<h1>Отклик на вакансию:</h1>
					<p>{jobName}</p>
				</ModalHeader>
				<ModalCloseButton className="jobs-modal-close-btn" />
				<form onSubmit={handleSubmit}>
					<ModalBody className="jobs-modal-body">
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
							{formData.cv && (
								<span className="add-resume-file-info">{formData?.cv.name}</span>
							)}
							{errors["cv"] && <span className="add-resume-error">*{errors["cv"]}</span>}
							<input
								id="cv"
								name="cv"
								hidden
								type="file"
								accept="application/pdf"
								multiple={false}
								ref={fileInputRef}
								onChange={handleFileChange}
							/>
						</div>
						<ReCAPTCHA
							sitekey={process.env.REACT_APP_SITE_KEY}
							ref={captchaRef}
							onChange={handleCaptchaChange}
						/>
						{errors["captcha"] && (
							<span className="captcha-error">
								Вы ввели неправильный ответ на контрольный вопрос
							</span>
						)}
					</ModalBody>

					<ModalFooter className="jobs-modal-footer">
						<Button type="submit">Отправить</Button>
						<ConfInfo />
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	)
}
