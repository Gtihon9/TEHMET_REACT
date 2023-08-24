import { services } from "../Services/Services.constants"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { DirectionSlide } from "./DirectionSlide"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"
import "./DirectionsSlider.css"

export const DirectionsSlider = () => {
	const [slideNumber, setSlideNumber] = useState(0)
	const [swiper, setSwiper] = useState(null)

	const isMobile = useMediaQuery({ query: `(max-width: 790px)` })

	return (
		<Swiper
			spaceBetween={80}
			speed={800}
			loop
			pagination={isMobile ? { clickable: true } : false}
			autoHeight
			onSwiper={swiper => setSwiper(swiper)}
			onSlideChange={swiper => setSlideNumber(swiper.realIndex)}
			modules={[Pagination]}
			className="directions-swiper"
		>
			{services.map(service => (
				<SwiperSlide key={service.title}>
					<DirectionSlide service={service} swiper={swiper} slideNumber={slideNumber} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
