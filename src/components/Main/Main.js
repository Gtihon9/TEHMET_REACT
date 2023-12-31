import AboutCompany1 from "../../images/about-company-1.png"
import AboutCompany2 from "../../images/about-company-2.png"
import AboutCompany3 from "../../images/about-company-3.png"
import AboutCompanyTiny1 from "../../images/about-company-1-tiny.png"
import AboutCompanyTiny2 from "../../images/about-company-2-tiny.png"
import AboutCompanyTiny3 from "../../images/about-company-3-tiny.png"
import ContactUsForm from "../ContactUsForm/ContactUsForm"
import { AboutCompanyAccordion } from "../AboutCompanyAccordion/AboutCompanyAccordion"
import bg_videoMP4 from "../../videos/tehmet-lending.mp4"
import bg_videoWEBM from "../../videos/tehmet-lending.webm"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import "./Main.css"
import { motion } from "framer-motion"
import { ScrollTopButton } from "../ScrollTopButton/ScrollTopButton"
import { DirectionsSection } from "./DirectionsSection"
import { LastProjectsSection } from "./LastProjectsSection"
import { LazyImage } from "../LazyImage/LazyImage"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"
import { Spinner } from "../Spinner/Spinner"
import useSWR from "swr"
import { fetcher } from "../../api"

const Main = () => {
	const fetchUrl = "/services/"
	const { data: services, isLoading } = useSWR(fetchUrl, fetcher)

	return (
		<motion.main
			className="main-content"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className="background-container">
				<video id="background-video" loop autoPlay muted playsInline>
					<source src={bg_videoMP4} type="video/mp4" />
					<source src={bg_videoWEBM} type="video/webm" />
					Your browser does not support the video tag.
				</video>
				<div className="container">
					<div className="hero">
						<div className="hero-title">
							<p className="hero-title-text">Создание устойчивого будущего</p>
							<p className="hero-title-text-sub">
								Строительство более экологичного завтра: Работа, за которую беремся мы
							</p>
						</div>
						{isLoading ? (
							<Spinner minHeight="12.5vh" />
						) : (
							<motion.div {...containerMotionProps} className="hero-features">
								{services?.results.map(service => (
									<motion.div
										{...staggerChildrenMotionProps}
										key={service.name}
										className="feature-item"
									>
										<div className="feature-item-circle" />
										<span className="feature-item-text">{service.name}</span>
									</motion.div>
								))}
							</motion.div>
						)}
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
								<LazyImage
									placeholder={AboutCompanyTiny1}
									src={AboutCompany1}
									alt="AboutCompany-1"
								/>
								<LazyImage
									placeholder={AboutCompanyTiny2}
									src={AboutCompany2}
									alt="About Company-2"
								/>
								<LazyImage
									placeholder={AboutCompanyTiny3}
									src={AboutCompany3}
									alt="About Company-3"
								/>
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
