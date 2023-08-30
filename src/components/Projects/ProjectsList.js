import { Card } from "../Card/Card"
import { motion } from "framer-motion"
import "./ProjectsList.css"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"
import { ProgressProject } from "../ProgressProject/ProgressProject"

const ProjectsList = ({ projects }) => {
	return (
		<motion.div {...containerMotionProps} className="project-list">
			{projects?.map(project => (
				<motion.div {...staggerChildrenMotionProps} key={project.title}>
					<Card
						item={{
							name: project.name,
							title: project.title,
							image: project.logo,
							compressedImage: project.compressed_logo,
							link: `/projects/${project.id}`,
						}}
					/>
				</motion.div>
			))}
			{projects?.length === 1 && (
				<motion.div {...staggerChildrenMotionProps}>
					<ProgressProject />
				</motion.div>
			)}
		</motion.div>
	)
}

export default ProjectsList
