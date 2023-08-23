import { Card } from "../Card/Card"
import { projectsList } from "./Projects.constants"
import "./ProjectsList.css"

const ProjectsList = () => {
	return (
		<div className="project-list">
			{projectsList.map((project) => (
				<Card key={project.title} item={{
					title: project.title,
					description: project.subTitle,
					image: project.image
				}} />
			))}
		</div>
	)
}

export default ProjectsList


