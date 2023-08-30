import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import LeftArrowSVG from "../Icons/L_Arrow"
import "./ServicesDetails.css"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { WorkStages } from "../WorkStages/WorkStages"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { motion } from "framer-motion"
import { useApi } from "../../hooks/useApi"
import { ServicesApi } from "../../api/services.api"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { WorkStagesGallery } from "../WorkStagesGallery/WorkStagesGallery"
import { OtherSection } from "../OtherSection/OtherSection"

export const ServicesDetails = () => {
	const { id } = useParams()
	const { response: serviceDetails, loading, error } = useApi(() => ServicesApi.getServiceById(id))
	const {
		response: allServices,
		loading: allLoading,
		error: allError,
	} = useApi(ServicesApi.getAllServices)

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="services-details"
		>
			<div className="container">
				<div className="services-details-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/<Link to="/services">Услуги</Link>/
							<Link to={`/services/${serviceDetails?.id}`}>{serviceDetails?.name}</Link>
						</div>
					</div>

					{loading || allLoading ? (
						<Spinner />
					) : error || allError ? (
						<div className="services-details-error-wrapper">
							<Error />
						</div>
					) : (
						<>
							<SectionHeading
								title={serviceDetails?.name}
								description={serviceDetails?.description}
								className="details-heading-section"
							/>

							<WorkStages />

							<WorkStagesGallery images={serviceDetails?.images} />

							<OtherSection
								title="Другие услуги"
								link="services"
								items={allServices?.results}
							/>
						</>
					)}
				</div>
			</div>
			<ExtendedContactForm />
		</motion.main>
	)
}
