import { Button } from "../Button/Button"
import "./ContactUsForm.css"
import { ArrowUp } from "../Icons/ArrowUp"
import { ConfInfo } from "../ConfInfo/ConfInfo"
import { useState } from "react"
import axios from "axios"
import { Input } from "../Input/Input"
import { Textarea } from "../Input/Textarea"

const ContactUsForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	})
	const [errors, setErrors] = useState({})

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
		setErrors(prev => ({
			...prev,
			[name]: undefined,
		}))
	}
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await axios.post("https://api.tehmetservice.ru/api/v1/feedback/email/", formData)
		} catch (error) {
			setErrors(error.response.data)
			console.log(errors)
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
									name="email"
									type="email"
									placeholder="Укажите email..."
									onChange={handleFieldChange}
									value={formData.email}
									error={errors["email"]}
								/>
								{/*<input*/}
								{/*	name="phone_number"*/}
								{/*	type="tel"*/}
								{/*	placeholder="Укажите телефон..."*/}
								{/*	onChange={handleFieldChange}*/}
								{/*	value={formData.phone_number}*/}
								{/*/>*/}
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
