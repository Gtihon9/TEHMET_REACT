import { Button } from "../Button/Button"
import "./ContactUsForm.css"
import { ConfInfo } from "../ConfInfo/ConfInfo"
import { useState } from "react"
import { Input } from "../Input/Input"
import { Textarea } from "../Input/Textarea"
import { ContactFormApi } from "../../api/contact-form.api"

const ContactUsForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone_number: "",
		message: "",
	})
	const [errors, setErrors] = useState({})

	const handleFieldChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
		setErrors(prev => ({
			...prev,
			[name]: undefined,
		}))
	}
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await ContactFormApi.feedbackLanding(formData)
			if (response) {
				setFormData({
					name: "",
					phone_number: "",
					message: "",
				})
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
