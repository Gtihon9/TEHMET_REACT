import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import LeftArrowSVG from "../Icons/L_Arrow"
import "./ServicesDetails.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { WorkStages } from "../WorkStages/WorkStages"
import ExtendedContactForm from "../ExtendedContactForm/ExtendedContactForm"
import { OtherStages } from "./OtherStages"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import useDisclosure from "../../hooks/useDisclosure"
import { useState } from "react"
import { PhotoSlider } from "react-photo-view"
import { useApi } from "../../hooks/useApi"
import { ServicesApi } from "../../api/services.api"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"

export const ServicesDetails = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const [index, setIndex] = useState(0)

	const { id } = useParams()

	const handleOpenGallery = imgIndex => {
		setIndex(imgIndex)
		onOpen()
	}

	const { response: serviceDetails, loading, error } = useApi(() => ServicesApi.getServiceById(id))

	const galleryImages = serviceDetails?.images ?? []

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

					{loading ? (
						<Spinner />
					) : error ? (
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

							<ArrowHeading title="Галерея" />
							<div className="work-stages-gallery">
								{serviceDetails?.images?.map((item, index) => (
									<img
										key={`work-stage-${item.id}`}
										alt={`work-stage-${item.id}`}
										src={item.image}
										onClick={() => handleOpenGallery(index)}
									/>
								))}
							</div>

							<div className="works-stages-gallery-mobile">
								<MobileSwiper>
									{serviceDetails?.images?.map((item, index) => (
										<SwiperSlide
											key={`work-stage-mobile-${item.id}`}
											onClick={() => handleOpenGallery(index)}
										>
											<img alt={`work-stage-mobile-${item.id}`} src={item.image} />
										</SwiperSlide>
									))}
								</MobileSwiper>
							</div>

							<OtherStages />

							<PhotoSlider
								images={galleryImages.map(item => ({
									src: item.image,
									key: `gallery-slider-${item.id}`,
								}))}
								visible={isOpen}
								onClose={onClose}
								index={index}
								onIndexChange={setIndex}
							/>
						</>
					)}
				</div>
			</div>
			<ExtendedContactForm />
		</motion.main>
	)
}
