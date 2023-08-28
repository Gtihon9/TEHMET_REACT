import LeftArrowSVG from "../Icons/L_Arrow"
import ContactUsForm from "../ContactUsForm/ContactUsForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { Link } from "react-router-dom"
import CompanyInfo from "../../images/company-info.png"
import "./Company.css"
import { motion } from "framer-motion"
import { CompanyServices } from "./CompanyServices"
import { CompanyRecycling } from "./CompanyRecycling"
import { CompanyStats } from "./CompanyStats"
import { CompanyRent } from "./CompanyRent"

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

					<CompanyServices />
					<CompanyRecycling />
					<CompanyStats />
					<CompanyRent />
				</div>
			</div>
			<ContactUsForm />
		</motion.main>
	)
}

export default Company
