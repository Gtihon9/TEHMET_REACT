import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import "./ContactUsForm.css"

const ContactUsForm = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<div className="background-container-2">
			<div className="main-content-container-3 container">
				<div className="contact-us-container">
					<div className="contact-us-form">
						<h1>Свяжитесь с нами</h1>
						<form action="/submit" method="POST">
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Укажите имя..."
								required
							/>

							<input
								type="email"
								id="email"
								name="email"
								placeholder="Укажите email..."
								required
							/>

							<textarea
								id="message"
								name="message"
								rows="4"
								placeholder="Сообщение"
								required
							/>

							<Button type="submit">Отправить</Button>
						</form>
						<p>
							Нажимая на кнопку "Отправить", я подтверждаю, что <br />
							ознакомился с <Link to="/conf">Политикой конфиденциальностии</Link> даю согласие{" "}
							<br />
							на обработку всех моих персональных данных
						</p>
					</div>
					<div className="contact-us-contacts">
						<div className="title">
							<p>Контакты</p>
						</div>
						<div className="text-container">
							<div className="text-block">
								<p>Телефон:</p>
								<p>+7-916-900-42-55</p>
							</div>
							<div className="text-block">
								<p>Email</p>
								<p>fdv240@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<div className="button">
					<Button onClick={scrollToTop}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="37"
							height="37"
							viewBox="0 0 37 37"
							fill="none"
						>
							<path
								d="M28.9062 17.6328L18.5 7.22656L8.09375 17.6328M18.5 8.67188V29.7734"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ContactUsForm
