import LeftArrowSVG from "../Icons/L_Arrow"
import ProjectsList from "./ProjectsList"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { Link, useSearchParams } from "react-router-dom"
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
import { ProgressProject } from "../ProgressProject/ProgressProject"
import { Pagination } from "../Pagination/Pagination"
import { getTotalPages } from "../../utils/getTotalPages"

const initialDirection = {
	id: "all-projects",
	label: "Все проекты",
	value: null,
}

const LIMIT = 1

const Projects = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const page = parseInt(searchParams.get("page")) || 1

	const [response, setResponse] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [selectedDirection, setSelectedDirection] = useState(initialDirection)

	const handleDirectionChange = direction => {
		setSelectedDirection(direction)
		setSearchParams({ page: 1 })
	}

	const totalPages = getTotalPages(response?.count, LIMIT)

	useEffect(() => {
		const getServiceProjects = async () => {
			try {
				setIsLoading(true)
				const { data } = await ProjectsApi.getAllProjects(
					selectedDirection.value,
					LIMIT,
					(page - 1) * LIMIT
				)
				setResponse(data)
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}

		getServiceProjects()
	}, [page, selectedDirection, setResponse])

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
					<SectionHeading title="Проекты" />

					<ProjectsDirections
						handleDirectionChange={handleDirectionChange}
						selectedDirection={selectedDirection}
					/>
					{isLoading ? (
						<Spinner minHeight="35vh" />
					) : response?.results?.length === 0 ? (
						<div className="projects-error-wrapper">
							<Error
								title="Исследование новых горизонтов ;)"
								message="Проекты, которые скоро появятся в этой категории"
							/>
						</div>
					) : (
						<>
							<div className="projects-list-container">
								<ProjectsList projects={response?.results} />
							</div>

							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								className="projects-list-container-mobile"
							>
								<MobileSwiper>
									{response?.results?.map(project => (
										<SwiperSlide key={project.id}>
											<Card
												item={{
													title: project.title,
													description: project.description,
													image: project.logo,
													link: `/projects/${project.id}`,
												}}
											/>
										</SwiperSlide>
									))}
									{response?.results?.length === 1 && (
										<SwiperSlide>
											<ProgressProject />
										</SwiperSlide>
									)}
								</MobileSwiper>
							</motion.div>
						</>
					)}

					<Pagination pageCount={totalPages} />
				</div>
			</div>
			<ExtendedContactForm />
		</motion.main>
	)
}

export default Projects
