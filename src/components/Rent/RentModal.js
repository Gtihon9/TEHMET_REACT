import { useState } from "react"
import "./RentModal.css"
import { Button } from "../Button/Button"
import { Modal } from "../Modal/Modal"
import { ConfInfo } from "../ConfInfo/ConfInfo"
import { Input } from "../Input/Input"
import { ContactFormApi } from "../../api/contact-form.api"

const initialFormData = {
	name: "",
	email: "",
	phone_number: "",
	rental_period: "",
}

export const RentModal = ({ isOpen, onClose }) => {
	const [errors, setErrors] = useState({})
	const [formData, setFormData] = useState(initialFormData)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		setErrors(prev => ({
			...prev,
			[name]: undefined,
		}))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await ContactFormApi.feedbackRent(formData)
			if (response) {
				setFormData(initialFormData)
				onClose()
			}
		} catch (error) {
			setErrors(error.response.data)
		}
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} maxWidth={780}>
			<div className="rent-modal-content">
				<div className="rent-modal-content-left">
					<h3>Свяжитесь с нами</h3>
					<form method="POST" onSubmit={handleSubmit} className="rent-modal-form">
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
							placeholder="Укажите email..."
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
						<Input
							name="rental_period"
							placeholder="Срок аренды..."
							type="text"
							required
							value={formData.rental_period}
							onChange={handleChange}
							error={errors["rental_period"]}
						/>
						<div className="rent-modal-footer">
							<Button type="submit">Отправить</Button>
							<ConfInfo />
						</div>
					</form>
				</div>
				<div className="rent-modal-content-right">
					<h3>Контакты</h3>
					<div className="rent-modal-content-contacts">
						<div className="rent-contact">
							<span>Телефон</span>
							<p>+7-916-900-42-55</p>
						</div>
						<div className="rent-contact">
							<span>Email</span>
							<p>d.fomenko@tehmetservice.ru</p>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
