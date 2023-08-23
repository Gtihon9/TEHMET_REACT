import { Swiper } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "./MobileSwiper.css"

export const MobileSwiper = ({ children }) => {
	return (
		<Swiper
			className="mobile-swiper"
			loop
			autoHeight
			modules={[Pagination]}
			pagination={{
				clickable: true,
			}}
			slidesPerView={1}
			speed={800}
		>
			{children}
		</Swiper>
	)
}
