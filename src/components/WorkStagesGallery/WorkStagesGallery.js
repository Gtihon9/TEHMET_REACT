import "./WorkStagesGallery.css"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import { PhotoSlider } from "react-photo-view"
import useDisclosure from "../../hooks/useDisclosure"
import { useState } from "react"
import { motion } from "framer-motion"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"
import { LazyImage } from "../LazyImage/LazyImage"

export const WorkStagesGallery = ({ images }) => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const [index, setIndex] = useState(0)

	const handleOpenGallery = imgIndex => {
		setIndex(imgIndex)
		onOpen()
	}

	const galleryImages = images ?? []

	if (images?.length <= 0) return null

	return (
		<>
			<ArrowHeading title="Галерея" />
			<motion.div {...containerMotionProps} className="work-stages-gallery">
				{images?.map((item, index) => (
					<motion.div {...staggerChildrenMotionProps}>
						<LazyImage
							key={`work-stage-${item.created_at}`}
							alt={`work-stage-${item.created_at}`}
							placeholderSrc={item.compressed_image}
							src={item.image}
							onClick={() => handleOpenGallery(index)}
						/>
					</motion.div>
				))}
			</motion.div>

			<div className="works-stages-gallery-mobile">
				<MobileSwiper>
					{images?.map((item, index) => (
						<SwiperSlide
							key={`work-stage-mobile-${item.created_at}`}
							onClick={() => handleOpenGallery(index)}
						>
							<LazyImage
								alt={`work-stage-mobile-${item.created_at}`}
								src={item.image}
								placeholderSrc={item.compressed_image}
							/>
						</SwiperSlide>
					))}
				</MobileSwiper>
			</div>

			<PhotoSlider
				images={galleryImages.map(item => ({
					src: item.image,
					key: `gallery-slider-${item.created_at}`,
				}))}
				visible={isOpen}
				onClose={onClose}
				index={index}
				onIndexChange={setIndex}
			/>
		</>
	)
}
