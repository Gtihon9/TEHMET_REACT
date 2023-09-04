import { Link } from "react-router-dom"
import { Logo } from "../Logo/Logo"
import "./Footer.css"
import { Spinner } from "../Spinner/Spinner"
import RegistrationLicense from "../../assets/RegistrationLicense.pdf"
import useSWR from "swr"
import { fetcher } from "../../api"

const Footer = () => {
	const fetchUrl = "/services/"
	const { data: services, isLoading, error } = useSWR(fetchUrl, fetcher)

	let listContent = <></>

	if (isLoading) {
		listContent = <Spinner minHeight="10vh" />
	}

	if (error || services?.count <= 0) {
		listContent = null
	}

	if (services?.count > 0) {
		listContent = services?.results?.map(service => (
			<li key={service.id + service.name}>
				<Link to={`/services/${service.id}`}>{service.name}</Link>
			</li>
		))
	}

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
								<Link to="/certificates">Сертификаты и лицензии</Link>
							</li>
						</ul>
					</div>
					<div className="footer-column">
						<h2>Направления комании</h2>
						<ul className="footer-column-list">{listContent}</ul>
					</div>
					<div className="footer-column">
						<h2>ООО «Техметсервис»</h2>
						<div className="address-info">
							<p>ОГРН 1035009566822</p>
							<p>ИНН 5047048624</p>
							<Link to="/conf">Политика конфиденциальности</Link>
							<a href={RegistrationLicense} rel="noreferrer" target="_blank">
								Лицензия регистрации
							</a>
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
