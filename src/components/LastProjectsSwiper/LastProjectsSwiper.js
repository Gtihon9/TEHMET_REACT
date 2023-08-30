import { useState } from "react"
import { ShareIcon } from "../Icons/ShareIcon"
import { Card } from "../Card/Card"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "./LastProjectsSwiper.css"
import { Link } from "react-router-dom"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { Button } from "../Button/Button"

const LastProjectsSwiper = ({ projects }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	let thumbsProjects = []

	if (projects?.length > 0) {
		thumbsProjects = [...projects]
		thumbsProjects.unshift(thumbsProjects.pop())
	}

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
					{projects?.map(project => (
						<SwiperSlide key={project.id}>
							<Card
								item={{
									title: project.name,
									image: project.logo,
									compressedImage: project.compressed_logo,
									link: "/projects",
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>

				{projects?.length > 1 && (
					<Swiper
						speed={800}
						modules={[Thumbs]}
						watchSlidesProgress={false}
						onSwiper={setThumbsSwiper}
					>
						{thumbsProjects?.map(project => (
							<SwiperSlide key={project.id}>
								<Card
									item={{
										title: project.name,
										image: project.logo,
										compressedImage: project.compressed_logo,
										link: "/projects",
									}}
								/>
								/>
							</SwiperSlide>
						))}
					</Swiper>
				)}

				<Link to="/projects" className="last-projects-button" data-length={projects?.length}>
					Посмотреть еще
					<ShareIcon />
				</Link>
			</div>
			<div className="last-projects-mobile">
				<MobileSwiper>
					{projects?.map(project => (
						<SwiperSlide key={project.id}>
							<Card
								item={{
									title: project.name,
									image: project.logo,
									compressedImage: project.compressed_logo,
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
