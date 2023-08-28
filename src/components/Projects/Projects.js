import LeftArrowSVG from "../Icons/L_Arrow"
import ProjectsList from "./ProjectsList"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { motion } from "framer-motion"
import "./Projects.css"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { Card } from "../Card/Card"
import { SwiperSlide } from "swiper/react"
import { ProjectsDirections } from "./ProjectsDirections"
import { useEffect, useState } from "react"
import { ProjectsApi } from "../../api/projects.api"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"

const initialDirection = {
	id: "all-projects",
	label: "Все проекты",
	value: null,
}

const Projects = () => {
	const [projects, setProjects] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [selectedDirection, setSelectedDirection] = useState(initialDirection)

	const handleDirectionChange = direction => {
		setSelectedDirection(direction)
	}

	useEffect(() => {
		const getServiceProjects = async () => {
			try {
				setIsLoading(true)
				const { data } = await ProjectsApi.getAllProjects(selectedDirection.value)
				setProjects(data?.results)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		getServiceProjects()
	}, [selectedDirection, setProjects])

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

					<ProjectsDirections
						handleDirectionChange={handleDirectionChange}
						selectedDirection={selectedDirection}
					/>
					{isLoading ? (
						<Spinner minHeight="40vh" />
					) : projects?.length === 0 ? (
						<div className="projects-error-wrapper">
							<Error
								title="Исследование новых горизонтов ;)"
								message="Проекты, которые скоро появятся в этой категории"
							/>
						</div>
					) : (
						<>
							<div className="projects-list-container">
								<ProjectsList projects={projects} />
								<Button className="project-list-button">Посмотреть ещё</Button>
							</div>

							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								className="projects-list-container-mobile"
							>
								<MobileSwiper>
									{projects?.map(project => (
										<SwiperSlide key={project.id}>
											<Card
												item={{
													title: project.title,
													description: project.description,
													image: project.logo,
												}}
											/>
										</SwiperSlide>
									))}
								</MobileSwiper>
							</motion.div>
						</>
					)}
				</div>
			</div>
			<ExtendedContactForm />
		</motion.main>
	)
}

export default Projects
