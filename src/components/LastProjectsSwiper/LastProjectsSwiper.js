import { useState } from "react"
import LeftArrowSVG from "../Icons/L_Arrow"
import RightArrowSVG from "../Icons/R_Arrow"
import image1 from "../../images/lastProjectsSwiper1.png"
import image2 from "../../images/lastProjectsSwiper2.png"
import image3 from "../../images/lastProjectsSwiper3.png"
import mini_image1 from "../../images/lastProjectsMiniImage1.png"
import mini_image2 from "../../images/lastProjectsMiniImage2.png"
import mini_image3 from "../../images/lastProjectsMiniImage3.png"
import { ShareIcon } from "../Icons/ShareIcon"
import "./LastProjectsSwiper.css"
import { Button } from "../Button/Button"

const LastProjectsSwiper = () => {
	const [currentSlide, setCurrentSlide] = useState(0)

	const handlePrevSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide === 0 ? 2 : prevSlide - 1))
	}

	const handleNextSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide === 2 ? 0 : prevSlide + 1))
	}

	const projectsData = [
		{
			title: "ОАО РСК МИГ",
			image: image1,
		},
		{
			title: "ООО Химпром",
			image: image2,
		},
		{
			title: "ООО Щекиноазот",
			image: image3,
		},
	]
	const { title, image } = projectsData[currentSlide]

	const projectsDataMini = [
		{
			mini_title: "ООО Химпром",
			mini_image: mini_image2,
		},
		{
			mini_title: "ООО Щекиноазот",
			mini_image: mini_image3,
		},
		{
			mini_title: "ОАО РСК МИГ",
			mini_image: mini_image1,
		},
	]
	const { mini_title, mini_image } = projectsDataMini[currentSlide]

	return (
		<div className="last-projects-main-container">
			<div
				className="last-projects-swiper"
				style={{
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${image}), lightgray 50% / cover no-repeat`,
				}}
			>
				<div className="last-projects-navigate">
					<button onClick={handlePrevSlide}>
						<LeftArrowSVG />
					</button>

					<button onClick={handleNextSlide}>
						<RightArrowSVG />
					</button>
				</div>
				<div className="last-projects-info">
					<p>{title}</p>
					<Button className="last-projects-swiper-button">
						<p>Смотреть полностью</p>
						<ShareIcon />
					</Button>
				</div>
			</div>
			<div className="last-projects-swiper-right-container">
				<div
					className="image"
					style={{
						background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${mini_image}), lightgray 50% / cover no-repeat`,
					}}
				>
					<p>{mini_title}</p>
				</div>
				<Button className="directions-link-button">
					<p>Посмотреть еще</p>
					<ShareIcon />
				</Button>
			</div>
		</div>
	)
}

export default LastProjectsSwiper
