import "./OtherSection.css"
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import LeftArrowSVG from "../Icons/L_Arrow"
import RightArrowSVG from "../Icons/R_Arrow"
import { Swiper, SwiperSlide } from "swiper/react"
import { Card } from "../Card/Card"

export const OtherSection = ({ title, items }) => {
	const [swiperState, setSwiperState] = useState({
		isBeginning: true,
		isEnd: false,
	})
	const [swiper, setSwiper] = useState(null)

	const { id } = useParams()
	const location = useLocation()
	const filteredItems = items?.filter(item => item.id !== id)

	console.log(location)

	return (
		<>
			<div className="other-section">
				<div className="other-section-header">
					<ArrowHeading title={title} />
					{filteredItems?.length > 1 && (
						<div className="other-section-nav">
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
					)}
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
					className="other-section-swiper"
				>
					{filteredItems?.map(item => (
						<SwiperSlide key={item.id}>
							<Card
								item={{
									title: item.name,
									image: item.logo,
									link: `/services/${item.id}`,
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
