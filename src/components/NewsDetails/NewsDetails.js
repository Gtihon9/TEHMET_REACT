import LeftArrowSVG from "../Icons/L_Arrow"
import { ShareIcon } from "../Icons/ShareIcon"
import { Link, useParams } from "react-router-dom"
import { OtherNews } from "./OtherNews"
import { ImageSwiper } from "./ImageSwiper"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import "./NewsDetails.css"
import { useCallback, useEffect, useState } from "react"
import { PhotoSlider } from "react-photo-view"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { formatDate } from "../../utils/formatDate"
import useDisclosure from "../../hooks/useDisclosure"
import { CheckIcon } from "../Icons/CheckIcon"
import { LazyImage } from "../LazyImage/LazyImage"
import useSWR from "swr"
import { fetcher } from "../../api"

export const NewsDetails = () => {
	const [isCopySuccess, setIsCopySuccess] = useState(false)
	const { isOpen, onClose, onOpen } = useDisclosure()
	const [index, setIndex] = useState(0)

	const { id } = useParams()

	const copy = useCallback(async text => {
		await navigator.clipboard.writeText(text)
		setIsCopySuccess(true)
	}, [])

	useEffect(() => {
		const id = setTimeout(() => setIsCopySuccess(false), 5000)
		return () => clearTimeout(id)
	}, [isCopySuccess])

	const fetchUrl = `/news/${id}/`
	const { data: details, isLoading, error } = useSWR(fetchUrl, fetcher)

	const galleryImages = details?.images ?? []

	const handleOpenGallery = imgIndex => {
		setIndex(imgIndex)
		onOpen()
	}

	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				{isLoading && <Spinner />}
				{error && (
					<div>
						<Error />
					</div>
				)}
				{details && (
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
									{details?.images?.map((image, index) => (
										<SwiperSlide
											key={image.created_at}
											onClick={() => handleOpenGallery(index)}
										>
											<LazyImage
												src={image.image}
												placeholder={image.compressed_image}
											/>
										</SwiperSlide>
									))}
								</MobileSwiper>
							</div>

							<PhotoSlider
								images={galleryImages?.map(item => ({
									src: item.image,
									key: item.id,
								}))}
								visible={isOpen}
								onClose={onClose}
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
								<button
									className={`share-button ${isCopySuccess ? "copied" : ""}`}
									onClick={() => copy(window.location.href)}
								>
									{isCopySuccess ? "Ссылка скопирована" : "Поделиться"}
									{isCopySuccess ? <CheckIcon /> : <ShareIcon />}
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
