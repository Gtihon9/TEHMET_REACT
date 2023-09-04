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
import { useState } from "react"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { ProgressProject } from "../ProgressProject/ProgressProject"
import { Pagination } from "../Pagination/Pagination"
import { getTotalPages } from "../../utils/getTotalPages"
import useSWR from "swr"
import { fetcher } from "../../api"

const initialDirection = {
	id: "all-projects",
	label: "Все проекты",
	value: null,
}

const LIMIT = 10

const Projects = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const page = parseInt(searchParams.get("page")) || 1

	const [selectedDirection, setSelectedDirection] = useState(initialDirection)

	const handleDirectionChange = direction => {
		setSelectedDirection(direction)
		setSearchParams({ page: 1 })
	}

	const limit = 10
	const offset = (page - 1) * limit
	const fetchUrl = selectedDirection.value
		? `/projects/?service=${selectedDirection.value}&limit=${limit}&offset=${offset}`
		: `/projects/?limit=${limit}&offset=${offset}`

	const { data: projects, isLoading, error } = useSWR(fetchUrl, fetcher)

	const totalPages = getTotalPages(projects?.count, LIMIT)

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
						<Spinner minHeight={"35vh"} />
					) : error || projects?.results?.length === 0 ? (
						<div className="projects-error-wrapper">
							<Error
								title="Исследование новых горизонтов ;)"
								message="Проекты, которые скоро появятся в этой категории"
							/>
						</div>
					) : (
						<>
							<div className="projects-list-container">
								<ProjectsList projects={projects?.results} />
							</div>

							<motion.div
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								className="projects-list-container-mobile"
							>
								<MobileSwiper>
									{projects?.results?.map(project => (
										<SwiperSlide key={project.id}>
											<Card
												item={{
													title: project.title,
													description: project.description,
													image: project.logo,
													compressedImage: project.compressed_logo,
													link: `/projects/${project.id}`,
												}}
											/>
										</SwiperSlide>
									))}
									{projects?.results?.length === 1 && (
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
