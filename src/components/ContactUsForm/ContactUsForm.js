import { Button } from "../Button/Button"
import "./ContactUsForm.css"
import { ArrowUp } from "../Icons/ArrowUp"
import { ConfInfo } from "../ConfInfo/ConfInfo"
import { useState } from "react"

const ContactUsForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		})
	}

	const handleFieldChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log(formData)
	}

	return (
		<div className="form-background-container">
			<div className="container">
				<div className="form-wrapper">
					<div className="form-content-container">
						<div className="form-content">
							<h1>Свяжитесь с нами</h1>
							<form onSubmit={handleSubmit} className="contact-us-form">
								<input
									name="name"
									type="text"
									placeholder="Укажите имя..."
									onChange={handleFieldChange}
									value={formData.name}
								/>
								<input
									name="email"
									type="email"
									placeholder="Укажите email..."
									onChange={handleFieldChange}
									value={formData.email}
								/>
								<textarea
									name="message"
									placeholder="Сообщение"
									onChange={handleFieldChange}
									value={formData.message}
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
									<p>fdv240@gmail.com</p>
								</div>
							</div>
						</section>
					</div>
					<Button className="scroll-button" onClick={scrollToTop}>
						<ArrowUp />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ContactUsForm
