import { Button } from "../Button/Button"
import { Card } from "../Card/Card"
import { projectsList } from "./Projects.constants"
import "./ProjectsList.css"

const ProjectsList = () => {
	return (
		<div className="project-list">
			<div className="projects-list-container">
				{projectsList.map((project) => (
					<Card key={project.title} item={{
						title: project.title,
						description: project.subTitle,
						image: project.image
					}} />
				))}
			</div>
			<Button className="project-list-button">
				<p>Посмотреть ещё</p>
			</Button>
		</div>
	)
}

export default ProjectsList


