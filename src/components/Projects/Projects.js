import LeftArrowSVG from "../Icons/L_Arrow"
import ProjectsList from "./ProjectsList"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Link, useSearchParams } from "react-router-dom"
import { directions } from "./Projects.constants"
import { motion } from "framer-motion"
import "./Projects.css"

const Projects = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		direction: "all-projects"
	})
	const initialDirection = searchParams.get("direction")

	const onDirectionClick = (value) => {
		setSearchParams({ direction: value })
	}

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="projects-content"
		>
			<div className="container">
				<div className="breadcrumbs">
					<LeftArrowSVG />
					<div className="breadcrumbs-text">
						<Link to="/">Главная</Link>/<Link to="/projects">Проекты</Link>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="projects">
					<SectionHeading title="Проекты" description="Более 60 завершенных проектов" />

					<div className="directions-container">
						<ArrowHeading title="Направления" />
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
			</div>
			<div className="background-container-2">
				<ExtendedContactForm />
			</div>
		</motion.main>
	)
}

export default Projects
