import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo"
import "./Footer.css"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-column">
						<Logo />
						<div className="address-info">
							<p>
								Московская область, городской округ Химки, город Химки, улица Рабочая, д.
								2А, кабинет 13.
							</p>
							<p>+7-916-900-42-55</p>
							<p>d.fomenko@tehmetservice.ru</p>
						</div>
					</div>
					<div className="footer-column">
						<h2>Компания</h2>
						<ul className="footer-column-list">
							<li>
								<Link to="/company">О компании</Link>
							</li>
							<li>
								<Link to="/projects">Проекты</Link>
							</li>
							<li>
								<Link to="/services">Услуги</Link>
							</li>
							<li>
								<Link to="/rent">Аренда</Link>
							</li>
							<li>
								<Link to="/news">Новости</Link>
							</li>
							<li>
								<Link to="/jobs">Вакансии</Link>
							</li>
							<li>
								<Link to="/cert">Сертификаты и лицензии</Link>
							</li>
						</ul>
					</div>
					<div className="footer-column">
						<h2>Направления комании</h2>
						<ul className="footer-column-list">
							<li>
								<Link to="/services/demolition">Снос и демонтаж</Link>
							</li>
							<li>
								<Link to="/services/pit-developing">
									Разработка и ограждение котлованов
								</Link>
							</li>
							<li>
								<Link to="/services/renovation">Реновация территории</Link>
							</li>
							<li>
								<Link to="/services/recycling">Рециклинг</Link>
							</li>
							<li>
								<Link to="/rent">Аренда</Link>
							</li>
						</ul>
					</div>
					<div className="footer-column">
						<h2>ООО «Техметсервис»</h2>
						<div className="address-info">
							<p>ОГРН 1035009566822</p>
							<p>ИНН 5047048624</p>
							<Link to="/conf">Политика конфиденциальности</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-company">
				<p>&copy; 2023 ООО "Техметсервис"</p>
			</div>
		</footer>
	)
}

export default Footer
