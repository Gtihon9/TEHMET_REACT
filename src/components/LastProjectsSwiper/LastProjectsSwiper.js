import { useState } from "react"
import { ShareIcon } from "../Icons/ShareIcon"
import { projectsList } from "../Projects/Projects.constants"
import { Card } from "../Card/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./LastProjectsSwiper.css"
import { Link } from "react-router-dom"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { Button } from "../Button/Button"

const LastProjectsSwiper = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	const thumbsProjects = [...projectsList]
	thumbsProjects.unshift(thumbsProjects.pop())

	return (
		<>
			<div className="last-projects">
				<Swiper
					speed={800}
					modules={[Navigation, Thumbs]}
					thumbs={{ swiper: thumbsSwiper }}
					navigation
					style={{
						"--swiper-navigation-color": "#ffffff",
					}}
				>
					{projectsList.map(project => (
						<SwiperSlide key={project.title}>
							<Card
								item={{
									title: project.title,
									image: project.image,
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<Swiper
					speed={800}
					modules={[Thumbs]}
					watchSlidesProgress={false}
					onSwiper={setThumbsSwiper}
				>
					{thumbsProjects?.map(project => (
						<SwiperSlide key={project.title}>
							<Card
								item={{
									title: project.title,
									image: project.image,
								}}
							/>
							/>
						</SwiperSlide>
					))}
				</Swiper>

				<Link to="/projects" className="last-projects-button">
					Посмотреть еще
					<ShareIcon />
				</Link>
			</div>
			<div className="last-projects-mobile">
				<MobileSwiper>
					{projectsList.map(project => (
						<SwiperSlide key={project.title}>
							<Card
								item={{
									title: project.title,
									image: project.image,
								}}
							/>
						</SwiperSlide>
					))}
				</MobileSwiper>
				<Link to="/projects" className="last-project-all-button">
					<Button>
						Все работы
						<ShareIcon />
					</Button>
				</Link>
			</div>
		</>
	)
}

export default LastProjectsSwiper
