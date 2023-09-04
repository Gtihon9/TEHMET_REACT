import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Spinner } from "../Spinner/Spinner"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShareIcon } from "../Icons/ShareIcon"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import "./CompanyRent.css"
import { LazyImage } from "../LazyImage/LazyImage"
import useSWR from "swr"
import { fetcher } from "../../api"

export const CompanyRent = () => {
	const limit = 8
	const offset = 0
	const fetchUrl = `/equipments/?limit=${limit}&offset=${offset}`

	const { data: equipments, isLoading, error } = useSWR(fetchUrl, fetcher)

	if (isLoading) return <Spinner />

	if (!isLoading && error) return null

	if (equipments?.results?.length <= 0) return null

	return (
		<div className="rent-container">
			<ArrowHeading title="Аренда техники" />
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				style={{ width: "100%" }}
			>
				<div className="rent-list">
					{equipments?.results?.slice(0, equipments?.results.length - 1).map(item => (
						<div key={item.id} className="company-card">
							<div className="company-card-backdrop" />
							<LazyImage
								alt={item.name}
								src={item.logo}
								placeholder={item.compressed_logo}
							/>
							<div className="company-card-content">
								<p>{item.name}</p>
							</div>
						</div>
					))}
					<Link
						key={equipments?.results[equipments?.results.length - 1].id}
						to={`/rent`}
						className="company-card"
					>
						<div className="company-card-backdrop" />
						<LazyImage
							alt={equipments?.results[equipments?.results.length - 1].name}
							src={equipments?.results[equipments?.results.length - 1].logo}
							placeholder={
								equipments?.results[equipments?.results.length - 1].compressed_logo
							}
						/>
						<div className="company-card-last">
							Посмотреть все
							<ShareIcon />
						</div>
					</Link>
				</div>
				<div className="rent-list-mobile">
					<MobileSwiper>
						{equipments?.results?.map(item => (
							<SwiperSlide key={item.id}>
								<div className="company-card">
									<div className="company-card-backdrop" />
									<LazyImage
										alt={item.name}
										src={item.logo}
										placeholder={item.compressed_logo}
									/>
									<div className="company-card-content">
										<p>{item.name}</p>
										<Link to={`/rent`}>Смотреть полностью</Link>
									</div>
								</div>
							</SwiperSlide>
						))}
					</MobileSwiper>
				</div>
			</motion.div>
		</div>
	)
}
