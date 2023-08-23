import LeftArrowSVG from "../Icons/L_Arrow"
import ContactUsForm from "../ContactUsForm/ContactUsForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Link } from "react-router-dom"
import { services } from "../Services/Services.constants"
import DefaultImage from "../../images/default-image.png"
import CompanyInfo from "../../images/company-info.png"
import "./Company.css"
import { recyclingInfo } from "./Company.constants"
import { Stats } from "../Stats/Stats"
import { motion } from "framer-motion"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import { Card } from "../Card/Card"
import { ShareIcon } from "../Icons/ShareIcon"

const Company = () => {
	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="company-content"
		>
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
								“Техметсервис” - компания специализирующаяся на демонтаже, сносе зданий и
								металлоконструкций, утилизации строительных отходов, а также предоставление
								своей спецтехники частным лицам или организациям, и на этом спектор услуг не
								ограничивается. Проработов более 5 лет, наша компания предоставляет
								высококвалифицированных специалистов и широким спектром специализированного
								оборудования, благодаря котормы - мы выполняем проекты любого масштаба - от
								небольших частных предприятий до масштабных промышленных демонтажных работ.
							</p>
							<p>
								Основополагающие факторы нашей компании является открытость в коммуникации
								со своими сотрудниками и партнерами. Благодаря индивидуальному подходу, мы
								можем предложить клиенту индивидуальные стратегии и решения, учитывающие все
								тонкости проекта и обеспечивающие достижение желаемых результатов.
							</p>
							<p>
								Одним из основных принципов компании “Техметсервис” является экологическое
								поддержание окружающей среды. Компания акцентирует важность минимизации
								экологического воздействия своей деятельности.
							</p>
						</div>
						<div className="company-info-image">
							<img alt="company-info" src={CompanyInfo} />
						</div>
					</div>

					<div className="company-services-container">
						<ArrowHeading
							title="Наш спектор услуг"
							description="Предоставляет выбор ......"
						/>
						<div className="company-services-images">
							{services.map(service => (
								<Link key={service.title} to={service.link} className="company-card">
									<div className="company-card-backdrop" />
									<img alt={service.title} src={service.image} />
									<div className="company-card-content">
										<p style={{ color: "#ffffff" }}>{service.title}</p>
									</div>
								</Link>
							))}
						</div>
						<div className="company-services-images-mobile">
							<MobileSwiper>
								{services.map(service => (
									<SwiperSlide key={service.title}>
										<Card
											item={{
												title: service.title,
												image: service.image,
												link: service.link,
											}}
										/>
									</SwiperSlide>
								))}
							</MobileSwiper>
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
							{recyclingInfo.map(item => (
								<p className="recycling-info-block">{item}</p>
							))}
						</div>
						<div className="recycling-info-mobile">
							<MobileSwiper>
								{recyclingInfo.map(item => (
									<SwiperSlide key={item}>
										<p className="recycling-info-block">{item}</p>
									</SwiperSlide>
								))}
							</MobileSwiper>
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
						<div className="rent-list">
							{mockRentItems.map(item => (
								<Link to={item.link} className="company-card">
									<img alt={item.title} src={item.image} />
									<div className="company-card-content">
										<p>{item.title}</p>
									</div>
								</Link>
							))}
							<Link to="/rent">
								<button className="rent-button">
									Посмотреть все
									<ShareIcon />
								</button>
							</Link>
						</div>
						<div className="rent-list-mobile">
							<MobileSwiper>
								{mockRentItems.map(item => (
									<SwiperSlide>
										<div className="company-card">
											<img alt={item.title} src={item.image} />
											<div className="company-card-content">
												<p>{item.title}</p>
												<Link to={item.link}>Смотреть полностью</Link>
											</div>
										</div>
									</SwiperSlide>
								))}
							</MobileSwiper>
						</div>
					</div>
				</div>
			</div>
			<ContactUsForm />
		</motion.main>
	)
}

export default Company

const mockRentItems = Array.from({ length: 7 }, () =>
	Object.assign(
		{},
		{
			title: "Название",
			image: DefaultImage,
			link: "/rent",
		}
	)
)
