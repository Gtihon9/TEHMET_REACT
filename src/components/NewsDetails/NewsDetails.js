import LeftArrowSVG from "../Icons/L_Arrow"
import { ShareIcon } from "../Icons/ShareIcon"
import { Link, useParams } from "react-router-dom"
import { OtherNews } from "./OtherNews"
import { ImageSwiper } from "./ImageSwiper"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import "./NewsDetails.css"
import { useState } from "react"
import { PhotoSlider } from "react-photo-view"
import { useApi } from "../../hooks/useApi"
import { NewsApi } from "../../api/news.api"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { formatDate } from "../../utils/formatDate"

export const NewsDetails = () => {
	const [isGalleryVisible, setIsGalleryVisible] = useState(false)
	const [index, setIndex] = useState(0)

	const { id } = useParams()

	const copy = async text => {
		await navigator.clipboard.writeText(text)
	}

	const { response: details, loading, error } = useApi(() => NewsApi.getNewsById(id))

	const galleryImages = details?.images ?? []

	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				{loading ? (
					<Spinner />
				) : error ? (
					<div>
						<Error />
					</div>
				) : (
					<div className="news-details-content">
						<div className="breadcrumbs">
							<LeftArrowSVG />
							<div className="breadcrumbs-text">
								<Link to="/">Главная</Link>/<Link to="/news">Новости</Link>/
								<Link to={`/news/${id}`}>{details?.title}</Link>
							</div>
						</div>

						<div className="news-details">
							<div className="news-details-swiper-wrapper">
								<ImageSwiper images={details?.images} galleryImages={galleryImages} />
							</div>

							<div className="news-details-swiper-wrapper-mobile">
								<MobileSwiper>
									{details?.images?.map(image => (
										<SwiperSlide
											key={image.created_at}
											onClick={() => setIsGalleryVisible(true)}
										>
											<img src={image.image} />
										</SwiperSlide>
									))}
								</MobileSwiper>
							</div>

							<PhotoSlider
								images={galleryImages?.map(item => ({
									src: item.imageUrl,
									key: item.id,
								}))}
								visible={isGalleryVisible}
								onClose={() => setIsGalleryVisible(false)}
								index={index}
								onIndexChange={setIndex}
							/>

							<div className="news-details-body">
								<h1>{details?.title}</h1>
								<p>{details?.description}</p>
							</div>

							<div className="news-details-footer">
								<p>
									Автор: <span>{details?.author?.username}</span>
								</p>
								<p>
									Дата публикации: <span>{formatDate(details?.created_at)}</span>
								</p>
								<button className="share-button" onClick={() => copy(window.location.href)}>
									Поделиться
									<ShareIcon />
								</button>
							</div>
						</div>

						<OtherNews />
					</div>
				)}
			</div>
		</motion.main>
	)
}
