import LeftArrowSVG from "../Icons/L_Arrow"
import ContactUsForm from "../ContactUsForm/ContactUsForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Link } from "react-router-dom"
import { services } from "../Services/Services.constants"
import CompanyInfo from "../../images/company-info.png"
import "./Company.css"
import { recyclingInfo } from "./Company.constants"
import { Stats } from "../Stats/Stats"

const Company = () => {
	return (
		<main className="company-content">
			<div className="container">
				<div className="breadcrumbs">
					<LeftArrowSVG />
					<div className="breadcrumbs-text">
						<Link to="/">Главная</Link>/<Link to="/company">О компании</Link>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="company">
					<SectionHeading title="О компании" />
					<div className="company-info">
						<div className="company-info-text">
							<p>
								“Техметсервис” - компания специализирующаяся на демонтаже, сносе <br />
								зданий и металлоконструкций, утилизации строительных отходов, а <br />
								также предоставление своей спецтехники частным лицам или <br />
								организациям, и на этом спектор услуг не ограничивается. Проработов <br />
								более 5 лет, наша компания предоставляет высококвалифицированных <br />
								специалистов и широким спектром специализированного оборудования, <br />
								благодаря котормы - мы выполняем проекты любого масштаба - от <br />
								небольших частных предприятий до масштабных промышленных <br />
								демонтажных работ.
							</p>
							<p>
								Основополагающие факторы нашей компании является открытость в <br />
								коммуникации со своими сотрудниками и партнерами. Благодаря <br />
								индивидуальному подходу, мы можем предложить клиенту <br />
								индивидуальные стратегии и решения, учитывающие все тонкости <br />
								проекта и обеспечивающие достижение желаемых результатов.
							</p>
							<p>
								Одним из основных принципов компании “Техметсервис” является <br />
								экологическое поддержание окружающей среды. Компания акцентирует <br />
								важность минимизации экологического воздействия своей <br />
								деятельности.
							</p>
						</div>
						<img alt="company-info" src={CompanyInfo} className="company-info-image" />
					</div>

					<div className="company-services">
						<ArrowHeading title="Наш спектор услуг" description="Предоставляет выбор ......" />
						<div className="company-services-images">
							{services.map((service) => (
								<Link key={service.title} to={service.link} className="company-card">
									<div className="company-card-backdrop" />
									<img alt={service.title} src={service.image} />
									<p>{service.title}</p>
								</Link>
							))}
						</div>
					</div>

					<div className="recycling-container">
						<ArrowHeading
							title="Переработка материала"
							description="Предоставляет рациональное решение не только для подрядчика, но и является
						оптимальным вариантом для застройщика территории. Наша команда заинтересована в
						оптимизации процесса работы, а также в достижение результата сопровожждаемого
						уменьшением затрат клиента"
							style={{ maxWidth: "926px" }}
						/>
						<div className="recycling-info">
							{recyclingInfo.map((item) => (
								<p className="recycling-info-block">{item}</p>
							))}
						</div>
					</div>

					<div className="stats-container">
						<ArrowHeading
							title="Цифры о нас"
							description="Неизменное стремление к качеству и удовлетворенности клиентов стимулирует
						стремление к совершенству, делая компанию конкурентно способной рынке."
							style={{ maxWidth: "716px" }}
						/>
						<Stats />
					</div>

					<div className="rent-container">
						<ArrowHeading
							title="Аренда техники"
							description="Предоставление техники под нужды юредическим или физическим лиц"
						/>
						<div className="rent-main-content-container">
							<a href="" className="rent-card">
								<p>Название</p>
							</a>
							<a href="" className="rent-card">
								<p>Название</p>
							</a>
							<a href="" className="rent-card">
								<p>Название</p>
							</a>
							<a href="" className="rent-card">
								<p>Название</p>
							</a>
							<a href="" className="rent-card">
								<p>Название</p>
							</a>
							<a href="" className="rent-card">
								<p>Название</p>
							</a>
							<a href="" className="rent-card">
								<p>Название</p>
							</a>
							<a href="" className="all-rent-cards">
								<div className="link">
									<p>Посмотреть все</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="29"
										height="30"
										viewBox="0 0 29 30"
										fill="none"
									>
										<path
											d="M25.375 15L15.4062 5.48438V10.9219C5.86627 10.9219 3.625 17.7624 3.625 24.5156C6.3783 20.9903 8.81328 19.0781 15.4062 19.0781V24.5156L25.375 15Z"
											stroke="white"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
			<ContactUsForm />
		</main>
	)
}

export default Company
