import { Button } from "../Button/Button"
import "./ContactUsForm.css"
import { ConfInfo } from "../ConfInfo/ConfInfo"
import { useRef, useState } from "react"
import { Input } from "../Input/Input"
import { Textarea } from "../Input/Textarea"
import { ContactFormApi } from "../../api/contact-form.api"
import ReCAPTCHA from "react-google-recaptcha"

const initialFormData = {
	name: "",
	phone_number: "",
	message: "",
}

const ContactUsForm = () => {
	const captchaRef = useRef(null)
	const [errors, setErrors] = useState({})
	const [formData, setFormData] = useState(initialFormData)

	const handleFieldChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
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
		try {
			const response = await ContactFormApi.feedbackLanding(formData)
			if (!captchaValue) {
				setErrors(prev => ({ ...prev, captcha: "error" }))
				return
			}
			if (response) {
				setFormData(initialFormData)
				captchaRef.current.reset()
			}
		} catch (error) {
			setErrors(error.response.data)
		}
	}

	return (
		<div className="form-background-container">
			<div className="container">
				<div className="form-wrapper">
					<div className="form-content-container">
						<div className="form-content">
							<h1>Свяжитесь с нами</h1>
							<form onSubmit={handleSubmit} className="contact-us-form">
								<Input
									name="name"
									type="text"
									placeholder="Укажите имя..."
									onChange={handleFieldChange}
									value={formData.name}
									error={errors["name"]}
								/>
								<Input
									name="phone_number"
									type="tel"
									placeholder="Укажите телефон..."
									onChange={handleFieldChange}
									value={formData.phone_number}
									error={errors["phone_number"]}
								/>
								<Textarea
									name="message"
									placeholder="Сообщение"
									onChange={handleFieldChange}
									value={formData.message}
									error={errors["message"]}
								/>
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
								<div className="contact-us-submit-container">
									<Button type="submit">Отправить</Button>
									<ConfInfo />
								</div>
							</form>
						</div>
						<section className="form-contacts-container">
							<h1>Контакты</h1>
							<div className="form-contacts-content">
								<div className="form-contacts-item">
									<span>Телефон:</span>
									<p>+7-916-900-42-55</p>
								</div>
								<div className="form-contacts-item">
									<span>Email:</span>
									<p>d.fomenko@tehmetservice.ru</p>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUsForm
