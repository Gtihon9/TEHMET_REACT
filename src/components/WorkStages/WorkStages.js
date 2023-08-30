import "./WorkStages.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { stages } from "./WorkStages.constants"
import { WorkStagesItem } from "./WorkStagesItem"
import { motion } from "framer-motion"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"

export const WorkStages = () => {
	return (
		<div className="work-stages">
			<ArrowHeading title="Этапы работы" style={{ maxWidth: 720 }} />
			<motion.div {...containerMotionProps} className="work-stages-items">
				{stages.map(stage => (
					<motion.div key={`stage-${stage.id}`} {...staggerChildrenMotionProps}>
						<WorkStagesItem stage={stage} />
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
