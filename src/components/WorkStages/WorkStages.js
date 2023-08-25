import "./WorkStages.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { stages } from "./WorkStages.constants"
import { WorkStagesItem } from "./WorkStagesItem"

export const WorkStages = () => {
	return (
		<div className="work-stages">
			<ArrowHeading title="Этапы работы" style={{ maxWidth: 720 }} />
			<div className="work-stages-items">
				{stages.map(stage => (
					<WorkStagesItem key={stage.id} stage={stage} />
				))}
			</div>
		</div>
	)
}
