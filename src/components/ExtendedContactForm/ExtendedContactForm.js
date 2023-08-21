import { useState } from "react"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Button } from "../Button/Button"
import "./ExtendedContactForm.css"

const ExtendedContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		aim: "",
		address: "",
		sizes: "",
		deadline: ""
	})

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({ ...prevData, [name]: value }))
	}

	const handleSubmit = async e => {
		e.preventDefault()

		try {
			const response = await fetch("https://your-api-endpoint.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})

			if (response.ok) {
				console.log("Form data submitted successfully")
			} else {
				console.error("Form data submission failed")
			}
		} catch (error) {
			console.error("An error occurred while submitting the form:", error)
		}
	}

	return (
		<div className="container">
			<div className="main-content-container-3">
				<div className="form-main-content">
					<ArrowHeading
						title="Получите коммерческое предложение"
						description="Опишите свой объект для лучшего расчета работы и выгодного решения"
					/>
					<div className="content">
						<p>
							Подробное описание объекта, для грядущей работе, поможет обеспечить эффективность
							процесса. Сюда можно включить такие сведения, как адрес объекта, его площадь,
							количество этажей или уровней, материалы, использованные при строительстве, а
							также любые уникальные или примечательные особенности. Для большей ясности можно
							также включить любую сопроводительную документацию или изображения. Предоставление
							максимально подробной информации поможет свести к минимуму задержки и обеспечить
							безопасность всех участников проекта.
						</p>

						<form
							className="extended-contact-form"
							action="/submit"
							method="POST"
							onSubmit={handleSubmit}
						>
							<div className="form">
								<div className="three-rows">
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
										name="phone"
										placeholder="Укажите телефон..."
										required
										value={formData.phone}
										onChange={handleChange}
									/>
								</div>
								<div className="form-columns">
									<textarea
										name="aim"
										placeholder="Укажите цель работы"
										required
										value={formData.aim}
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
										name="sizes"
										placeholder="Укажите объем работ или его габариты"
										required
										value={formData.sizes}
										onChange={handleChange}
									/>
									<input
										type="date"
										name="deadline"
										placeholder="Желаемые сроки выполнения работы"
										required
										value={formData.deadline}
										onChange={handleChange}
									/>
								</div>
								<div className="submit-container">
									<Button type="submit">Отправить</Button>
									<p>
										Нажимая на кнопку "Отправить", я подтверждаю, что <br />
										ознакомился с <a href="/conf">Политикой конфиденциальностии</a> даю
										согласие <br />
										на обработку всех моих персональных данных
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ExtendedContactForm
