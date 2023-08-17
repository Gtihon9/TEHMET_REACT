import LeftArrowSVG from "../Icons/L_Arrow"
import { Link } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Stats } from "../Stats/Stats"
import { stats, services } from "./Services.constants"
import { ServicesItem } from "./ServicesItem"
import "./Services.css"

const Services = () => {
	return (
		<main className="container services-content">
			<div className="breadcrumbs">
				<LeftArrowSVG />
				<div className="breadcrumbs-text">
					<Link to="/">Главная</Link>/<Link to="/deals">Услуги</Link>
				</div>
			</div>
			<SectionHeading
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

			<Stats stats={stats} />

			<ArrowHeading
				title="Мы специализируемся"
				description="Имея широкий спектр услуг, мы акцентируем наше внимание на качестве и надежности в работе с вами. Наша команда гордится мастерством и вниманием к деталям, с которыми мы подходим к каждому проекту. Приоритетным направлением нашей работы является предоставление исключительных услуг, однако мы также придерживаемся принципов ответственного отношения к окружающей среде."
				style={{ marginTop: 90, maxWidth: 720 }}
			/>

			<div className="services-list">
				{services.map((service) => (
					<ServicesItem key={service.title} service={service} />
				))}
			</div>

		</main>
	)
}

export default Services

