import { useRef, useState } from "react"
import "./RentModal.css"
import { Button } from "../Button/Button"
import { ConfInfo } from "../ConfInfo/ConfInfo"
import { Input } from "../Input/Input"
import { ContactFormApi } from "../../api/contact-form.api"
import ReCAPTCHA from "react-google-recaptcha"
import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/modal"

const initialFormData = {
	name: "",
	email: "",
	phone_number: "",
	rental_period: "",
}

export const RentModal = ({ isOpen, onClose }) => {
	const captchaRef = useRef(null)
	const [errors, setErrors] = useState({})
	const [formData, setFormData] = useState(initialFormData)

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
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
			const response = await ContactFormApi.feedbackRent(formData)
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
		<Modal isOpen={isOpen} onClose={onClose} className="rent-modal">
			<ModalOverlay className="rent-modal-overlay" />
			<ModalContent className="rent-modal-content">
				<ModalCloseButton className="rent-modal-close-btn" />
				<ModalBody className="rent-modal-body">
					<form onSubmit={handleSubmit} className="rent-modal-form">
						<ModalHeader className="rent-modal-header">
							<h1>Свяжитесь с нами</h1>
						</ModalHeader>
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

						<ModalFooter className="rent-modal-footer">
							<Button type="submit">Отправить</Button>
							<ConfInfo />
						</ModalFooter>
					</form>
					<div className="rent-modal-contacts-wrapper">
						<h3>Контакты</h3>
						<div className="rent-modal-contacts">
							<div className="rent-modal-contact">
								<span>Телефон</span>
								<p>+7-916-900-42-55</p>
							</div>
							<div className="rent-modal-contact">
								<span>Email</span>
								<p>d.fomenko@tehmetservice.ru</p>
							</div>
						</div>
					</div>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
