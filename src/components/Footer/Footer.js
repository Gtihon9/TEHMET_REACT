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
							<a href="/company">О компании</a>
						</li>
						<li>
							<a href="/projects">Проекты</a>
						</li>
						<li>
							<a href="/deals">Услуги</a>
						</li>
						<li>
							<a href="/rent">Аренда</a>
						</li>
						<li>
							<a href="/news">Новости</a>
						</li>
						<li>
							<a href="/jobs">Вакансии</a>
						</li>
						<li>
							<a href="/cert">Сертификаты и лицензии</a>
						</li>
					</ul>
				</div>
				<div className="footer-column">
					<div className="footer-column-name">Направления комании</div>
					<ul>
						<li>
							<a href="/demolition">Снос и демонтаж</a>
						</li>
						<li>
							<a href="/pit-developing">Разработка и ограждение котлованов</a>
						</li>
						<li>
							<a href="/renovation">Реновация территории</a>
						</li>
						<li>
							<a href="/recycling">Рециклинг</a>
						</li>
						<li>
							<a href="/rent">Аренда</a>
						</li>
					</ul>
				</div>
				<div className="footer-column">
					<div className="footer-column-name">ООО «Техметсервис»</div>
					<div className="address-info">
						<p className="address-line-1">ОГРН 1035009566822</p>
						<p className="address-line-2">ИНН 5047048624</p>
						<a href="/rent">Политика конфиденциальности</a>
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
