import "./CompanyStats.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Stats } from "../Stats/Stats"

export const CompanyStats = () => {
	return (
		<div className="stats-container">
			<ArrowHeading
				title="Цифры о нас"
				description="Неизменное стремление к качеству и удовлетворенности клиентов стимулирует
						стремление к совершенству, делая компанию конкурентно способной рынке."
				style={{ maxWidth: "716px" }}
			/>
			<Stats />
		</div>
	)
}
