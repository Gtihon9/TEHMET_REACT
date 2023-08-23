import LeftArrowSVG from "../Icons/L_Arrow"
import ProjectsList from "./ProjectsList"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Link, useSearchParams } from "react-router-dom"
import { directions, projectsList } from "./Projects.constants"
import { Button } from "../Button/Button"
import { motion } from "framer-motion"
import Select from "react-select"
import "./Projects.css"
import { useState } from "react"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { Card } from "../Card/Card"
import { SwiperSlide } from "swiper/react"
import { DropdownIndicator } from "../Icons/DropdownIndicator"

const Projects = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		direction: "all-projects",
	})
	const initialDirection = searchParams.get("direction")

	const initialSelectOption = directions.find(direction => direction.value === initialDirection)
	const [selectedDirection, _] = useState(directions[0])

	const onDirectionClick = value => {
		setSearchParams({ direction: value })
	}

	const handleDirectionChange = selectedOption => {
		setSearchParams({ direction: selectedOption.value })
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
							{directions.map(direction => (
								<button
									key={direction.id}
									className={`link ${
										initialDirection === direction.value ? "active" : ""
									}`}
									onClick={() => onDirectionClick(direction.value)}
								>
									<p>{direction.label}</p>
								</button>
							))}
						</div>

						<div className="directions-links-select-mobile">
							<Select
								value={initialSelectOption}
								onChange={handleDirectionChange}
								options={directions}
								className="directions-select-container"
								classNamePrefix="directions-select"
								components={{
									DropdownIndicator: DropdownIndicator,
								}}
							/>
						</div>
					</div>
					<div className="projects-list-container">
						<ProjectsList />
						<Button className="project-list-button">Посмотреть ещё</Button>
					</div>

					<div className="projects-list-container-mobile">
						<MobileSwiper>
							{projectsList.map(project => (
								<SwiperSlide key={project.title}>
									<Card
										item={{
											title: project.title,
											description: project.subTitle,
											image: project.image,
										}}
									/>
								</SwiperSlide>
							))}
						</MobileSwiper>
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
