import { useState } from "react"
import { Navigation, Pagination, A11y, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./ImageSwiper.css"
import { PhotoSlider } from "react-photo-view"
import { useMediaQuery } from "react-responsive"

export const ImageSwiper = ({ images, galleryImages }) => {
	const [isGalleryVisible, setIsGalleryVisible] = useState(false)
	const [index, setIndex] = useState(0)

	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const isDesktop = useMediaQuery({ query: `(min-width: 690px)` })

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
				{images?.map(item => (
					<SwiperSlide onClick={() => setIsGalleryVisible(true)}>
						<img key={`main-${item.created_at}`} alt={item.created_at} src={item.image} />
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
						320: {
							slidesPerView: 2,
						},
						640: {
							slidesPerView: 3,
						},
						1280: {
							slidesPerView: 4,
						},
					}}
				>
					{images?.map(item => (
						<SwiperSlide>
							<img key={`thumb-${item.created_at}`} alt={item.created_at} src={item.image} />
						</SwiperSlide>
					))}
				</Swiper>
			)}

			<PhotoSlider
				images={galleryImages?.map(item => ({ src: item.image, key: item.created_at }))}
				visible={isGalleryVisible}
				onClose={() => setIsGalleryVisible(false)}
				index={index}
				onIndexChange={setIndex}
			/>
		</div>
	)
}
