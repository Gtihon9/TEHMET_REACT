import { Card } from "../Card/Card"
import { motion } from "framer-motion"
import "./ProjectsList.css"

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

const containerMotionProps = {
	variants: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.6,
				delayChildren: 0.3,
				staggerChildren: 0.15,
			},
		},
	},
	initial: "hidden",
	animate: "show",
}

const staggerChildrenMotionProps = {
	variants: {
		hidden: {
			y: 50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
			},
		},
	},
}
