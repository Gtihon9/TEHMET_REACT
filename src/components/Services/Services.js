import LeftArrowSVG from "../Icons/L_Arrow"
import { Link } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Stats } from "../Stats/Stats"
import { services } from "./Services.constants"
import { ServicesItem } from "./ServicesItem"
import { motion } from "framer-motion"
import "./Services.css"
import { useEffect } from "react"
import axios from "axios"

const Services = () => {
	useEffect(() => {
		const handleData = async () => {
			const response = await axios.get("https://api.tehmetservice.ru/api/v1/projects/", {
			})
			console.log(response);
		}
		handleData()
	}, [])

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="container">
				<div className="services-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/<Link to="/services">Услуги</Link>
						</div>
					</div>
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
						{services.map((service) => (
							<ServicesItem key={service.title} service={service} />
						))}
					</div>

				</div>
			</div>
		</motion.main>
	)
}

export default Services

