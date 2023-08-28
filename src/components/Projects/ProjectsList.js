import { Card } from "../Card/Card"
import { motion } from "framer-motion"
import "./ProjectsList.css"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"

const ProjectsList = ({ projects }) => {
	return (
		<motion.div {...containerMotionProps} className="project-list">
			{projects?.map(project => (
				<motion.div {...staggerChildrenMotionProps} key={project.title}>
					<Card
						item={{
							title: project.name,
							description: project.description,
							image: project.logo,
						}}
					/>
				</motion.div>
			))}
		</motion.div>
	)
}

export default ProjectsList
