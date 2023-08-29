import LeftArrowSVG from "../Icons/L_Arrow"
import { Link } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Stats } from "../Stats/Stats"
import { ServicesItem } from "./ServicesItem"
import { motion } from "framer-motion"
import "./Services.css"
import { useApi } from "../../hooks/useApi"
import { ServicesApi } from "../../api/services.api"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"

const Services = () => {
	const { response: services, loading, error } = useApi(ServicesApi.getAllServices)

	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				<div className="services-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/<Link to="/services">Услуги</Link>
						</div>
					</div>

					{loading ? (
						<Spinner />
					) : error || services?.count === 0 ? (
						<div className="services-error-wrapper">
							<Error
								title="В данный момент список услуг нашей компании отсутствует :("
								message="Мы хотели бы сообщить Вам, что услуги нашей компании в настоящее время находятся в процессе добавления на наш сайт и пока не видны. Мы приносим свои извинения."
							/>
						</div>
					) : (
						<>
							<SectionHeading
								className="catalog-section"
								title="Наш каталог услуг"
								description="Наша команда профессионалов способна справиться с проектами любого масштаба.
					Мы предлагаем широкий спектр услуг, выборочные внутренние, наружные и спектр
					работ в близко прилегающей территорий к строениям"
								style={{ maxWidth: 1050 }}
							/>

							<ArrowHeading
								title="Почему нас выбирают"
								description="Неизменное стремление к качеству и удовлетворенности клиентов стимулирует
					стремление к совершенству, делая компанию конкурентно способной рынке."
								style={{ maxWidth: "716px" }}
							/>

							<Stats />

							<ArrowHeading
								className="specialization-section"
								title="Мы специализируемся"
								description="Имея широкий спектр услуг, мы акцентируем наше внимание на качестве и надежности в работе с вами. Наша команда гордится мастерством и вниманием к деталям, с которыми мы подходим к каждому проекту. Приоритетным направлением нашей работы является предоставление исключительных услуг, однако мы также придерживаемся принципов ответственного отношения к окружающей среде."
								style={{ maxWidth: 720 }}
							/>

							<div className="services-list">
								{services?.results.map(service => (
									<ServicesItem key={service.title} service={service} />
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</motion.main>
	)
}

export default Services
