import { useState } from "react"
import { ShareIcon } from "../Icons/ShareIcon"
import { projectsList } from "../Projects/Projects.constants"
import { Card } from "../Card/Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "./LastProjectsSwiper.css"
import { Link } from "react-router-dom";

const LastProjectsSwiper = () => {
	const [swiper, setSwiper] = useState(null)
	const [slideNumber, setSlideNumber] = useState(0)

	const handleChangeSlideNumber = (number) => {
		if (number + 1 === swiper.slides.length) {
			setSlideNumber(0)
		} else {
			setSlideNumber(number)
		}
	}

	return (
		<div className="last-projects">
			<Swiper
				onSwiper={setSwiper}
				onSlideChange={(swiper) => handleChangeSlideNumber(swiper.realIndex)}
				modules={[Navigation]}
				navigation
				style={{
					'--swiper-navigation-color': '#ffffff',
				}}
			>
				{projectsList.map((project) => (
					<SwiperSlide key={project.title}>
						<Card item={{
							title: project.title,
							image: project.image
						}} />
					</SwiperSlide>
				))}
			</Swiper>

			<Card item={{
				title: projectsList[slideNumber + 1]?.title,
				image: projectsList[slideNumber + 1]?.image
			}} />

			<Link to="/projects" className="last-projects-button">
				Посмотреть еще
				<ShareIcon />
			</Link>
		</div >
	)
}

export default LastProjectsSwiper