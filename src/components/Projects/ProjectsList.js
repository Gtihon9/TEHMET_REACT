import { Card } from "../Card/Card"
import "./ProjectsList.css"

const ProjectsList = ({ projects }) => {
	return (
		<div className="project-list">
			{projects?.map(project => (
				<Card
					key={project.title}
					item={{
						title: project.title,
						description: project.subTitle,
						image: project.image,
					}}
				/>
			))}
		</div>
	)
}

export default ProjectsList
