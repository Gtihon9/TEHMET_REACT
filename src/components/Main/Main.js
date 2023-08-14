import PointSVG from "../Icons/Point"
import ArrowSVG from "../Icons/Arrow"
import AboutCompany1 from "../../images/about-company-1.png"
import AboutCompany2 from "../../images/about-company-2.png"
import AboutCompany3 from "../../images/about-company-3.png"
import ContactUsForm from "../ContactUsForm/ContactUsForm"
import SliderComponent from "../SliderComponent/SliderComponent"
import AboutCompanyMainInfo2 from "../AboutCompanyList/AboutCompanyList"
import LastProjectsSwiper from "../LastProjectsSwiper/LastProjectsSwiper"
import "./Main.css"

const Main = () => {
	return (
		<main className="main-content">
			<div className="background-container">
				<div className="main-content-container-1 container">
					<div className="main-title">
						<p className="main-title-text">Создание устойчивого будущего</p>
						<p className="main-title-text-sub">
							Строительство более экологичного завтра: Работа, за которую беремся мы
						</p>
					</div>
					<div className="main-items-container">
						<div className="column">
							<div className="circle">
								<PointSVG />
								<span className="text">Снос и демонтаж строений</span>
							</div>
							<div className="circle">
								<PointSVG />
								<span className="text">Рециклинг строительных отходов</span>
							</div>
							<div className="circle">
								<PointSVG />
								<span className="text">Промышленный демонтаж</span>
							</div>
						</div>
						<div className="column">
							<div className="circle">
								<PointSVG />
								<span className="text">Реновация территорий</span>
							</div>
							<div className="circle">
								<PointSVG />
								<span className="text">Земляные работы</span>
							</div>
							<div className="circle">
								<PointSVG />
								<span className="text">Шпунтовое ограждение котлованов</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="main-content-container-2 container">
				<div className="directions">
					<div className="directions-title">
						<ArrowSVG />
						<p className="directions-title-text">Направления</p>
					</div>
					<SliderComponent />
				</div>
				<div className="about-company-container">
					<div className="about-company-title">
						<ArrowSVG />
						<p className="about-company-title-text">О компании</p>
					</div>
					<div className="about-company-main">
						<div className="about-company-images">
							<div className="about-company-left-image">
								<img src={AboutCompany1} alt="AboutCompany 1" />
							</div>
							<div className="about-company-right-images">
								<img src={AboutCompany2} alt="About Company 2" />
								<img src={AboutCompany3} alt="About Company 3" />
							</div>
						</div>
						<div className="about-company-main-info">
							<p>Техметсервис</p>
							<div className="about-company-main-text">
								<p>
									Мы - это опыт работы с объектами любого масштаба. Благодаря
									<br />
									большому опыту и использованию современных технологий мы <br />
									добиваемся исключительных результатов, поддерживая высокий
									<br />
									уровень подготовки рабочих. Независимо от того, требуется ли вам снос{" "}
									<br />
									небольшого строения или реновации территории крупного <br />
									промышленного объекта, мы обладаем достаточным опытом и <br />
									ресурсами, чтобы справиться с любой задачей.
								</p>
								<p>
									Безопасность - наш главный приоритет. Мы строго соблюдаем все
									<br />
									правила договоров и инструкции по технике безопасности, применяя <br />
									комплексные меры по защите наших работников, клиентов и <br />
									окружающей среды. Наша приверженность поддержанию безопасных <br />
									условий труда отличает нас как надежную и ответственную компанию.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="about-company-container">
					<div className="about-company-title">
						<ArrowSVG />
						<p className="about-company-title-text">Техметсервис - это</p>
					</div>
					<AboutCompanyMainInfo2 />
				</div>
				<div className="about-company-container">
					<div className="about-company-title">
						<ArrowSVG />
						<p className="about-company-title-text">Наши последние проекты</p>
					</div>
					<LastProjectsSwiper />
				</div>
			</div>
			<ContactUsForm />
		</main>
	)
}

export default Main
