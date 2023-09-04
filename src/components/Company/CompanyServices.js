import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Spinner } from "../Spinner/Spinner"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import { Card } from "../Card/Card"
import { useApi } from "../../hooks/useApi"
import { ServicesApi } from "../../api/services.api"
import "./CompanyServices.css"
import { LazyImage } from "../LazyImage/LazyImage"

export const CompanyServices = () => {
	const { response: services, loading, error } = useApi(ServicesApi.getAllServices)

	if (loading) return <Spinner />

	if (!loading && error) return null

	if (services?.results?.length <= 0) return null

	return (
		<div className="company-services-container">
			<ArrowHeading title="Наш спектор услуг" />
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<div className="company-services-images">
					{services?.results?.map(service => (
						<Link key={service.id} to={`/services/${service.id}`} className="company-card">
							<div className="company-card-backdrop" />
							<LazyImage
								alt={service.name}
								placeholder={service.compressed_logo}
								src={service.logo}
							/>
							<div className="company-card-content">
								<p>{service.name}</p>
							</div>
						</Link>
					))}
				</div>
				<div className="company-services-images-mobile">
					<MobileSwiper>
						{services?.results?.map(service => (
							<SwiperSlide key={service.id}>
								<Card
									item={{
										name: service.name,
										image: service.logo,
										compressedImage: service.compressed_logo,
										link: `/services/${service.id}`,
									}}
								/>
							</SwiperSlide>
						))}
					</MobileSwiper>
				</div>
			</motion.div>
		</div>
	)
}
