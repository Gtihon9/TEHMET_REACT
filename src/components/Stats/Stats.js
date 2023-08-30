import { StatsItem } from "./StatsItem"
import { stats } from "./Stats.constants"
import { motion } from "framer-motion"
import "./Stats.css"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"

export const Stats = () => {
	return (
		<motion.div {...containerMotionProps} className="stats">
			{stats.map(stat => (
				<motion.div key={stat.title} {...staggerChildrenMotionProps}>
					<StatsItem stat={stat} />
				</motion.div>
			))}
		</motion.div>
	)
}
