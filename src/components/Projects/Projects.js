import LeftArrowSVG from "../Icons/L_Arrow"
import ProjectsList from "./ProjectsList"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import "./Projects.css"
import { Link, useSearchParams } from "react-router-dom"

const Projects = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		direction: "all-projects"
	})
	const initialDirection = searchParams.get("direction")

	const onDirectionClick = (value) => {
		setSearchParams({ direction: value })
	}

	return (
		<main className="projects-content">
			<div className="breadcrumbs container">
				<LeftArrowSVG />
				<div className="breadcrumbs-text">
					<Link to="/">Главная</Link>/<Link to="/projects">Проекты</Link>
				</div>
			</div>
			<div className="projects container">
				<SectionHeading title="Проекты" description="Более 60 завершенных проектов" />

				<div className="directions-container">
					<ArrowHeading>Направления</ArrowHeading>
					<div className="directions-links-block">
						{directions.map((direction) => (
							<button
								key={direction.id}
								className={`link ${initialDirection === direction.value ? "active" : ""}`}
								onClick={() => onDirectionClick(direction.value)}
							>
								<p>{direction.name}</p>
							</button>
						))}

					</div>
				</div>
				<div className="content-container">
					<ProjectsList />
				</div>
			</div>
			<div className="background-container-2">
				<ExtendedContactForm />
			</div>
		</main>
	)
}

export default Projects

const directions = [
	{
		id: 1,
		name: "Все проекты",
		value: "all-projects"
	},
	{
		id: 2,
		name: "Снос и демонтаж",
		value: "demolition-and-dismantling"
	},
	{
		id: 3,
		name: "Рециклинг",
		value: "recycling"
	},
	{
		id: 4,
		name: "Реновация территорий",
		value: "renovation-of-territories"
	},
	{
		id: 5,
		name: "Земляные работы",
		value: "earthworks"
	},
	{
		id: 6,
		name: "Разработка и ограждение котлованов",
		value: "development-and-fencing-of-pits"
	},
]
