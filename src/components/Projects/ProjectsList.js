import image1 from "../../images/project-item1.png"
import image2 from "../../images/project-item2.png"
import image3 from "../../images/project-item3.png"
import image4 from "../../images/project-item4.png"
import image5 from "../../images/project-item5.png"
import image6 from "../../images/project-item6.png"
import { Button } from "../Button/Button"
import { ShareIcon } from "../Icons/ShareIcon"
import "./ProjectsList.css"

const ProjectsList = () => {
	return (
		<div className="project-list">
			<div className="projects-list-container">
				{projectsData.map((project, index) => (
					<div
						className="project-item"
						key={index}
						style={{
							backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),  url(${project.image})`,
						}}
					>
						<div className="main-frame">
							<div className="title-container">
								<div className="title">{project.title}</div>
								<div className="sub-title">{project.sub_title}</div>
							</div>
							<Button className="project-item-button">
								<p>Смотреть полностью</p>
								<ShareIcon />
							</Button>
						</div>
					</div>
				))}
			</div>
			<Button className="project-list-button">
				<p>Посмотреть ещё</p>
			</Button>
		</div>
	)
}

export default ProjectsList

const projectsData = [
	{
		title: "Завод имени ХРуничева",
		sub_title: "Ракетно-космический завод",
		image: image1,
	},
	{
		title: "ООО Транслом",
		sub_title: "Торговая компания ломом",
		image: image2,
	},
	{
		title: "ООО Химпром",
		sub_title: "Химическая компания",
		image: image3,
	},
	{
		title: "ОАО РСК МИГ",
		sub_title: "Цех самолетостроения ",
		image: image4,
	},
	{
		title: "ООО Щекиноазот",
		sub_title: "Химическая компания",
		image: image5,
	},
	{
		title: " г. Чебоксары ПАО Химпром",
		sub_title: "Химическая компания",
		image: image6,
	},
]
