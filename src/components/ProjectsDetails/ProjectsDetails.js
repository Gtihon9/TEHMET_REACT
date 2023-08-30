import { motion } from "framer-motion"
import "./ProjectsDetails.css"
import LeftArrowSVG from "../Icons/L_Arrow"
import { Link, useParams } from "react-router-dom"
import { useApi } from "../../hooks/useApi"
import { ProjectsApi } from "../../api/projects.api"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { WorkStages } from "../WorkStages/WorkStages"
import { WorkStagesGallery } from "../WorkStagesGallery/WorkStagesGallery"
import { OtherSection } from "../OtherSection/OtherSection"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"

export const ProjectsDetails = () => {
	const { id } = useParams()
	const { response: projectDetails, loading, error } = useApi(() => ProjectsApi.getProjectById(id))
	const {
		response: allProjects,
		loading: allLoading,
		error: allError,
	} = useApi(ProjectsApi.getAllProjects)

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="projects-details"
		>
			<div className="container">
				<div className="projects-details-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/<Link to="/projects">Проекты</Link>/
							<Link to={`/services/${projectDetails?.id}`}>{projectDetails?.name}</Link>
						</div>
					</div>

					{loading || allLoading ? (
						<Spinner />
					) : error || allError ? (
						<div className="projects-details-error-wrapper">
							<Error />
						</div>
					) : (
						<>
							<SectionHeading
								title={projectDetails?.name}
								description={projectDetails?.description}
								className="projects-details-heading-section"
							/>

							<WorkStages />

							<WorkStagesGallery images={projectDetails?.images} />

							<OtherSection title="Другие проекты" items={allProjects?.results} />
						</>
					)}
				</div>
			</div>
		</motion.main>
	)
}
