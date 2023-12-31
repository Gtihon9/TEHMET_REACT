import { useRef, useState } from "react"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Button } from "../Button/Button"
import "./ExtendedContactForm.css"
import { Input } from "../Input/Input"
import { Textarea } from "../Input/Textarea"
import { ContactFormApi } from "../../api/contact-form.api"
import ReCAPTCHA from "react-google-recaptcha"
import { ConfInfo } from "../ConfInfo/ConfInfo"

const initialFormData = {
	name: "",
	email: "",
	phone_number: "",
	objective: "",
	address: "",
	work_scope: "",
	work_deadlines: "",
}

const ExtendedContactForm = () => {
	const captchaRef = useRef(null)
	const [errors, setErrors] = useState({})
	const [formData, setFormData] = useState(initialFormData)

	const handleChange = e => {
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

	const handleSubmit = async e => {
		e.preventDefault()
		const captchaValue = captchaRef.current.getValue()
		try {
			const response = await ContactFormApi.feedbackProject(formData)
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

	const handleCaptchaChange = () => {
		setErrors(prev => ({
			...prev,
			captcha: null,
		}))
	}

	return (
		<div className="form-background-container">
			<div className="extended-contact-form-container">
				<div className="container">
					<div className="form-main-content">
						<ArrowHeading
							title="Получите коммерческое предложение"
							description="Опишите свой объект для лучшего расчета работы и выгодного решения"
						/>
						<div className="content">
							<p className="content-description">
								Подробное описание объекта, для грядущей работе, поможет обеспечить
								эффективность процесса. Сюда можно включить такие сведения, как адрес
								объекта, его площадь, количество этажей или уровней, материалы,
								использованные при строительстве, а также любые уникальные или
								примечательные особенности. Для большей ясности можно также включить любую
								сопроводительную документацию или изображения. Предоставление максимально
								подробной информации поможет свести к минимуму задержки и обеспечить
								безопасность всех участников проекта.
							</p>

							<form
								className="extended-contact-form"
								action="/submit"
								method="POST"
								onSubmit={handleSubmit}
							>
								<div className="first-line">
									<Input
										type="text"
										name="name"
										placeholder="Укажите имя..."
										required
										value={formData.name}
										onChange={handleChange}
										error={errors["name"]}
									/>
									<Input
										type="email"
										name="email"
										placeholder="Укажите email..."
										required
										value={formData.email}
										onChange={handleChange}
										error={errors["email"]}
									/>
									<Input
										type="tel"
										name="phone_number"
										placeholder="Укажите телефон..."
										required
										value={formData.phone_number}
										onChange={handleChange}
										error={errors["phone_number"]}
									/>
								</div>
								<Textarea
									name="objective"
									placeholder="Укажите цель работы"
									required
									value={formData.objective}
									onChange={handleChange}
									error={errors["objective"]}
								/>
								<Input
									name="address"
									placeholder="Укажите адрес объекта"
									required
									value={formData.address}
									onChange={handleChange}
									error={errors["address"]}
								/>
								<Input
									type="text"
									name="work_scope"
									placeholder="Укажите объем работ или его габариты"
									required
									value={formData.work_scope}
									onChange={handleChange}
									error={errors["work_scope"]}
								/>
								<Input
									type="text"
									name="work_deadlines"
									placeholder="Желаемые сроки выполнения работы"
									required
									value={formData.work_deadlines}
									onChange={handleChange}
									error={errors["work_deadlines"]}
								/>
								<div className="submit-container">
									<ReCAPTCHA
										sitekey={process.env.REACT_APP_SITE_KEY}
										ref={captchaRef}
										onChange={handleCaptchaChange}
										style={{ width: 200 }}
									/>
									{errors["captcha"] && (
										<span className="captcha-error">
											Вы ввели неправильный ответ на контрольный вопрос
										</span>
									)}
									<Button type="submit">Отправить</Button>
									<ConfInfo />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExtendedContactForm
