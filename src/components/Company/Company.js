import LeftArrowSVG from "../Icons/L_Arrow"
import ContactUsForm from "../ContactUsForm/ContactUsForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Link } from "react-router-dom"
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
import { useApi } from "../../hooks/useApi"
import { ServicesApi } from "../../api/services.api"
import { Spinner } from "../Spinner/Spinner"
import { RentApi } from "../../api/rent.api"
import { SimpleGrid } from "@chakra-ui/layout"

const Company = () => {
	const {
		response: services,
		loading: servicesLoading,
		error: servicesError,
	} = useApi(ServicesApi.getAllServices)

	const {
		response: equipments,
		loading: equipmentsLoading,
		error: equipmentsError,
	} = useApi(() => RentApi.getAllRents(8, 0))

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
						{servicesLoading ? (
							<Spinner />
						) : servicesError ? (
							<h1>Что-то пошло не так</h1>
						) : (
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<div className="company-services-images">
									{services?.results?.map(service => (
										<Link
											key={service.id}
											to={`/services/${service.id}`}
											className="company-card"
										>
											<div className="company-card-backdrop" />
											<img alt={service.name} src={service.logo} />
											<div className="company-card-content">
												<p>{service.name}</p>
											</div>
										</Link>
									))}
								</div>
								<div className="company-services-images-mobile">
									<MobileSwiper>
										{services?.results?.map(service => (
											<SwiperSlide key={service.id}>
												<Card
													item={{
														title: service.name,
														image: service.logo,
														link: `/services/${service.id}`,
													}}
												/>
											</SwiperSlide>
										))}
									</MobileSwiper>
								</div>
							</motion.div>
						)}
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
								<p key={item} className="recycling-info-block">
									{item}
								</p>
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
							description="Предоставление техники под нужды юридическим или физическим лицам"
						/>
						{equipmentsLoading ? (
							<Spinner />
						) : equipmentsError ? (
							<h1>Что-то пошло не так</h1>
						) : (
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<div className="rent-list">
									{equipments?.results
										?.slice(0, equipments?.results.length - 1)
										.map(item => (
											<Link key={item.id} to={`/rent`} className="company-card">
												<div className="company-card-backdrop" />
												<img alt={item.name} src={item.logo} />
												<div className="company-card-content">
													<p>{item.name}</p>
												</div>
											</Link>
										))}
									<Link
										key={equipments?.results[equipments?.results.length - 1].id}
										to={`/rent`}
										className="company-card"
									>
										<div className="company-card-backdrop" />
										<img
											alt={equipments?.results[equipments?.results.length - 1].name}
											src={equipments?.results[equipments?.results.length - 1].logo}
										/>
										<div className="company-card-last">
											Посмотреть все
											<ShareIcon />
										</div>
									</Link>
								</div>
								<div className="rent-list-mobile">
									<MobileSwiper>
										{equipments?.results?.map(item => (
											<SwiperSlide key={item.id}>
												<div className="company-card">
													<div className="company-card-backdrop" />
													<img alt={item.name} src={item.logo} />
													<div className="company-card-content">
														<p>{item.name}</p>
														<Link to={`/rent`}>Смотреть полностью</Link>
													</div>
												</div>
											</SwiperSlide>
										))}
									</MobileSwiper>
								</div>
							</motion.div>
						)}
					</div>
				</div>
			</div>
			<ContactUsForm />
		</motion.main>
	)
}

export default Company

const mockRentItems = Array.from({ length: 3 }, () =>
	Object.assign(
		{},
		{
			name: "Название",
			logo: DefaultImage,
			link: "/rent",
		}
	)
)
