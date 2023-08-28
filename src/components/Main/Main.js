import AboutCompany11 from "../../images/about-company-11.png"
import AboutCompany2 from "../../images/about-company-2.png"
import AboutCompany3 from "../../images/about-company-3.png"
import ContactUsForm from "../ContactUsForm/ContactUsForm"
import { AboutCompanyAccordion } from "../AboutCompanyAccordion/AboutCompanyAccordion"
import LastProjectsSwiper from "../LastProjectsSwiper/LastProjectsSwiper"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import "./Main.css"
import { features } from "./Main.constants"
import { motion } from "framer-motion"
import { ScrollTopButton } from "../ScrollTopButton/ScrollTopButton"
import { DirectionsSection } from "./DirectionsSection"
import { LastProjectsSection } from "./LastProjectsSection"

const Main = () => {
	return (
		<motion.main
			className="main-content"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="background-container">
				<div className="container">
					<div className="hero">
						<div className="hero-title">
							<p className="hero-title-text">Создание устойчивого будущего</p>
							<p className="hero-title-text-sub">
								Строительство более экологичного завтра: Работа, за которую беремся мы
							</p>
						</div>
						<div className="hero-features">
							{features.map(feature => (
								<div key={feature} className="feature-item">
									<div className="feature-item-circle" />
									<span className="feature-item-text">{feature}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="main-info-container">
					<DirectionsSection />

					<div className="section-container">
						<ArrowHeading title="О компании" />
						<div className="main-about-company-content">
							<div className="main-about-company-images">
								<img src={AboutCompany11} alt="AboutCompany 1" />
								<img src={AboutCompany2} alt="About Company 2" />
								<img src={AboutCompany3} alt="About Company 3" />
							</div>
							<div className="main-about-company-info">
								<h2>Техметсервис</h2>
								<div className="main-about-company-text">
									<p>
										Мы - это опыт работы с объектами любого масштаба. Благодаря большому
										опыту и использованию современных технологий мы добиваемся
										исключительных результатов, поддерживая высокий уровень подготовки
										рабочих. Независимо от того, требуется ли вам снос небольшого строения
										или реновации территории крупного промышленного объекта, мы обладаем
										достаточным опытом и ресурсами, чтобы справиться с любой задачей.
									</p>
									<p>
										Безопасность - наш главный приоритет. Мы строго соблюдаем все правила
										договоров и инструкции по технике безопасности, применяя комплексные
										меры по защите наших работников, клиентов и окружающей среды. Наша
										приверженность поддержанию безопасных условий труда отличает нас как
										надежную и ответственную компанию.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="section-container">
						<ArrowHeading title="Техметсервис - это" />
						<AboutCompanyAccordion />
					</div>
					<LastProjectsSection />
				</div>
			</div>
			<ContactUsForm />
			<ScrollTopButton />
		</motion.main>
	)
}

export default Main
