import ProgressProjectImage from "../../images/progress-project.png"
import "./ProgressProject.css"

export const ProgressProject = () => {
	return (
		<div className="progress-project">
			<div className="progress-project-image">
				<img alt="progress-project" src={ProgressProjectImage} />
			</div>
			<h3 className="progress-project-title">Проект в настоящее время на стадии выполнения</h3>
		</div>
	)
}
