import { useParams } from "react-router-dom"
import { servicesDetails } from "./ServicesDetails.constants"
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

export const ServicesDetails = () => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const [index, setIndex] = useState(0)

	const { name } = useParams()

	const details = servicesDetails[name]

	const handleOpenGallery = imgIndex => {
		setIndex(imgIndex)
		onOpen()
	}

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
							<Link to={`/services/${name}`}>{details.title}</Link>
						</div>
					</div>

					<SectionHeading
						title={details.title}
						description={details.description}
						className="details-heading-section"
					/>

					<WorkStages />

					<ArrowHeading title="Галерея" />
					<div className="work-stages-gallery">
						{details.images.map((image, index) => (
							<img alt={name + index} src={image} onClick={() => handleOpenGallery(index)} />
						))}
					</div>

					<div className="works-stages-gallery-mobile">
						<MobileSwiper>
							{details.images.map((image, index) => (
								<SwiperSlide key={index} onClick={() => handleOpenGallery(index)}>
									<img alt={`work-stage-${index}`} src={image} />
								</SwiperSlide>
							))}
						</MobileSwiper>
					</div>

					<OtherStages />

					<PhotoSlider
						images={details.images.map((item, index) => ({ src: item, key: index }))}
						visible={isOpen}
						onClose={onClose}
						index={index}
						onIndexChange={setIndex}
					/>
				</div>
			</div>
			<ExtendedContactForm />
		</motion.main>
	)
}
