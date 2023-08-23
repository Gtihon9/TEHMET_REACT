import { useState } from "react"
import "./RentModal.css"
import { Button } from "../Button/Button"
import { Modal } from "../Modal/Modal"
import { ConfInfo } from "../ConfInfo/ConfInfo"

export const RentModal = ({ isOpen, onClose }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		rentPeriod: "",
	})

	const handleSubmit = e => {
		e.preventDefault()
		console.log(formData)
	}

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose} maxWidth={780}>
			<div className="rent-modal-content">
				<div className="rent-modal-content-left">
					<h3>Свяжитесь с нами</h3>
					<form method="POST" onSubmit={handleSubmit} className="rent-modal-form">
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
							placeholder="Укажите email..."
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
						<input
							name="rentPeriod"
							placeholder="Срок аренды..."
							type="date"
							required
							value={formData.rentPeriod}
							onChange={handleChange}
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
							<p>fdv240@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
