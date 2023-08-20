import { Link } from "react-router-dom"
import Logo from "../../images/logo.png"
import LogoText from "../../images/logoText.png"
import "./Footer.css"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content container">
				<div className="footer-column">
					<div className="logo">
						<div className="logo-wrapper">
							<img className="logo-image" src={Logo} alt="Logo" />
							<img className="logo-image-text" src={LogoText} alt="Logo Text" />
						</div>
					</div>
					<div className="address-info">
						<p>
							Московская область, городской округ Химки,
							<br />
							город Химки, улица Рабочая, д. 2А,
							<br />
							кабинет 13.
						</p>
						<p>+7-916-900-42-55</p>
						<p>fdv240@gmail.com</p>
					</div>
				</div>
				<div className="footer-column">
					<div className="footer-column-name">Компания</div>
					<ul>
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
					<div className="footer-column-name">Направления комании</div>
					<ul>
						<li>
							<Link to="/services/demolition">Снос и демонтаж</Link>
						</li>
						<li>
							<Link to="/services/pit-developing">Разработка и ограждение котлованов</Link>
						</li>
						<li>
							<Link to="/services/renovation">Реновация территории</Link>
						</li>
						<li>
							<Link to="services/recycling">Рециклинг</Link>
						</li>
						<li>
							<Link to="/rent">Аренда</Link>
						</li>
					</ul>
				</div>
				<div className="footer-column">
					<div className="footer-column-name">ООО «Техметсервис»</div>
					<div className="address-info">
						<p className="address-line-1">ОГРН 1035009566822</p>
						<p className="address-line-2">ИНН 5047048624</p>
						<Link to="/conf">Политика конфиденциальности</Link>
					</div>
				</div>
			</div>
			<div className="footer-company">
				<p>© 2023 Разработчик.</p>
			</div>
		</footer>
	)
}

export default Footer
