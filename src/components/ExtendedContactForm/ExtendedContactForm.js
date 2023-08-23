import { useState } from "react"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Button } from "../Button/Button"
import "./ExtendedContactForm.css"
import axios from "axios"

const ExtendedContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone_number: "",
		goal: "",
		address: "",
		scope: "",
		terms: "",
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await axios.post("https://api.tehmetservice.ru/api/v1/feedback/project/", formData)
		} catch (error) {
			console.log(error)
		}
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
									<input
										type="text"
										name="name"
										placeholder="Укажите имя..."
										required
										value={formData.name}
										onChange={handleChange}
									/>
									<input
										type="email"
										name="email"
										placeholder="Укажите email..."
										required
										value={formData.email}
										onChange={handleChange}
									/>
									<input
										type="tel"
										name="phone_number"
										placeholder="Укажите телефон..."
										required
										value={formData.phone_number}
										onChange={handleChange}
									/>
								</div>
								<textarea
									name="goal"
									placeholder="Укажите цель работы"
									required
									value={formData.goal}
									onChange={handleChange}
								></textarea>
								<textarea
									name="address"
									placeholder="Укажите адрес объекта"
									required
									value={formData.address}
									onChange={handleChange}
								></textarea>
								<input
									type="text"
									name="scope"
									placeholder="Укажите объем работ или его габариты"
									required
									value={formData.scope}
									onChange={handleChange}
								/>
								<input
									type="date"
									name="terms"
									placeholder="Желаемые сроки выполнения работы"
									required
									value={formData.terms}
									onChange={handleChange}
								/>
								<div className="submit-container">
									<Button type="submit">Отправить</Button>
									<p>
										Нажимая на кнопку "Отправить", я подтверждаю, что <br />
										ознакомился с <a href="/conf">Политикой конфиденциальностии</a> даю
										согласие <br />
										на обработку всех моих персональных данных
									</p>
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
