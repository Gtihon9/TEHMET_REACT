import "./CompanyRecycling.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { recyclingInfo } from "./Company.constants"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"

export const CompanyRecycling = () => {
	return (
		<div className="recycling-container">
			<ArrowHeading
				title="Переработка материала"
				description="Предоставляет рациональное решение не только для подрядчика, но и является
											оптимальным вариантом для застройщика территории. Наша команда заинтересована в
											оптимизации процесса работы, а также в достижение результата сопровожждаемого
											уменьшением затрат клиента"
				style={{ maxWidth: "926px" }}
			/>
			<div className="recycling-info">
				{recyclingInfo.map(item => (
					<p key={item} className="recycling-info-block">
						{item}
					</p>
				))}
			</div>
			<div className="recycling-info-mobile">
				<MobileSwiper>
					{recyclingInfo.map(item => (
						<SwiperSlide key={item}>
							<p className="recycling-info-block">{item}</p>
						</SwiperSlide>
					))}
				</MobileSwiper>
			</div>
		</div>
	)
}
