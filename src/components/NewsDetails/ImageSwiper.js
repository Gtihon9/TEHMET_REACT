import { useState } from "react"
import { Navigation, Pagination, A11y, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./ImageSwiper.css"
import { PhotoSlider } from "react-photo-view"
import { useMediaQuery } from "react-responsive"
import useDisclosure from "../../hooks/useDisclosure"
import { LazyImage } from "../LazyImage/LazyImage"

export const ImageSwiper = ({ images, galleryImages }) => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const [index, setIndex] = useState(0)

	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const isDesktop = useMediaQuery({ query: `(min-width: 690px)` })

	const handleOpenGallery = imgIndex => {
		setIndex(imgIndex)
		onOpen()
	}

	return (
		<div className="news-details-images">
			<Swiper
				speed={800}
				style={{
					"--swiper-navigation-color": "#ffffff",
					"--swiper-pagination-color": "#ffffff",
				}}
				spaceBetween={10}
				loop
				navigation
				pagination={{ clickable: true }}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[Pagination, Navigation, Thumbs, A11y]}
				autoHeight
				onSlideChange={swiper => setIndex(swiper.activeIndex)}
				className="main-swiper"
			>
				{images?.map((item, index) => (
					<SwiperSlide
						key={`main-${item.created_at}`}
						onClick={() => handleOpenGallery(index)}
					>
						<LazyImage
							alt={item.created_at}
							src={item.image}
							placeholder={item.compressed_image}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			{isDesktop && images?.length > 1 && (
				<Swiper
					speed={800}
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					watchSlidesProgress={true}
					modules={[Navigation, Thumbs]}
					className="thumbs-swiper"
					breakpoints={{
						600: {
							slidesPerView: 2,
						},
						790: {
							slidesPerView: 3,
						},
						1280: {
							slidesPerView: 4,
						},
					}}
				>
					{images?.map(item => (
						<SwiperSlide key={`thumb-${item.created_at}`}>
							<LazyImage
								alt={item.created_at}
								src={item.image}
								placeholder={item.compressed_image}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}

			<PhotoSlider
				images={galleryImages?.map(item => ({
					src: item.image,
					key: `gallery-${item.created_at}`,
				}))}
				visible={isOpen}
				onClose={onClose}
				index={index}
				onIndexChange={setIndex}
			/>
		</div>
	)
}
