import { useState } from "react"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import LeftArrowSVG from "../Icons/L_Arrow"
import RightArrowSVG from "../Icons/R_Arrow"
import { Card } from "../Card/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import { otherServices } from "./ServicesDetails.constants"
import "swiper/css"
import "./OtherStages.css"
import { useParams } from "react-router-dom"

export const OtherStages = () => {
	const [swiperState, setSwiperState] = useState({
		isBeginning: true,
		isEnd: false,
	})
	const [swiper, setSwiper] = useState(null)

	const { name } = useParams()

	return (
		<div className="work-stages-other">
			<div className="work-stages-other-header">
				<ArrowHeading title="Другие услуги" />
				<div className="work-stages-other-header-nav">
					<button
						onClick={() => swiper.slidePrev()}
						className={swiperState.isBeginning ? "disabled" : ""}
					>
						<LeftArrowSVG />
					</button>
					<button
						onClick={() => swiper.slideNext()}
						className={swiperState.isEnd ? "disabled" : ""}
					>
						<RightArrowSVG />
					</button>
				</div>
			</div>
			<Swiper
				speed={800}
				spaceBetween={40}
				slidesPerView={1}
				onSwiper={swiper => setSwiper(swiper)}
				onSlideChange={swiper =>
					setSwiperState({
						isBeginning: swiper.isBeginning,
						isEnd: swiper.isEnd,
					})
				}
				breakpoints={{
					690: {
						slidesPerView: 2,
					},
				}}
			>
				{otherServices
					.filter(item => !item.link.includes(name))
					.map(service => (
						<SwiperSlide>
							<Card key={service.title} item={service} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	)
}
