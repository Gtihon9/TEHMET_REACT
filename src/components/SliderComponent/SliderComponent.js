import { useState } from "react"
import LeftArrowSVG from "../Icons/L_Arrow"
import RightArrowSVG from "../Icons/R_Arrow"
import DirectionSlideImage1 from "../../images/DirectionSlideImage1.png"
import DirectionSlideImage2 from "../../images/DirectionSlideImage2.png"
import DirectionSlideImage3 from "../../images/DirectionSlideImage3.png"
import DirectionSlideImage4 from "../../images/DirectionSlideImage4.png"
import DirectionSlideImage5 from "../../images/DirectionSlideImage5.png"
import { Button } from "../Button/Button"
import { ShareIcon } from "../Icons/ShareIcon"
import "./SliderComponent.css"

const slideImages = [
	DirectionSlideImage1,
	DirectionSlideImage2,
	DirectionSlideImage3,
	DirectionSlideImage4,
	DirectionSlideImage5,
]
const SliderComponent = () => {
	const totalSlides = 5
	const [currentSlideIndex, setCurrentSlideIndex] = useState(1)

	const showSlide = slideIndex => {
		if (slideIndex > totalSlides) {
			slideIndex = 1
		} else if (slideIndex < 1) {
			slideIndex = totalSlides
		}
		setCurrentSlideIndex(slideIndex)
	}

	const prevSlide = () => {
		showSlide(currentSlideIndex - 1)
	}

	const nextSlide = () => {
		showSlide(currentSlideIndex + 1)
	}

	return (
		<div className="directions-main">
			<div className="directions-main-left-column">
				{/* Slide 1 */}
				<div
					className="directions-main-l-c-info"
					style={{ display: currentSlideIndex === 1 ? "flex" : "none" }}
				>
					<div className="title">
						<p>
							Снос и демонтаж <br /> строений, металлоконструкций
						</p>
					</div>
					<div className="description">
						<p>
							Снос и демонтаж - это сложные процессы, которые требуют тщательного <br />
							планирования, точности и соблюдения строгих протоколов безопасности. <br />
							Наша команда специализируется по сносу любых строений, от небольших <br />
							сооружений до масштабных зданий, а также их демонтажу, сохраняя <br />
							ценные материалы для переработки и повторного использования.
						</p>
					</div>
				</div>

				{/* Slide 2 */}
				<div
					className="directions-main-l-c-info"
					style={{ display: currentSlideIndex === 2 ? "flex" : "none" }}
				>
					<div className="title">
						<p>Рециклинг </p>
					</div>
					<div className="description">
						<p>
							Благодаря рециклингу переработка отработанных материалов позволят использовать
							повторно данный продукт, что позволяет снизить нагрузку на природные ресурсы и
							минимизировать воздействие на окружающую среду. Благодаря такой технологии, мы
							сокращаем потребность в сырье, потребление меньшего количества энергии и помимо
							экологических преимуществ, которые дают значительное сохранение загрязнения и
							выброса парниковых газов, производится переработка отходов, которые дают
							экономическое преимущество.
						</p>
					</div>
				</div>

				{/* Slide 3 */}
				<div
					className="directions-main-l-c-info"
					style={{ display: currentSlideIndex === 3 ? "flex" : "none" }}
				>
					<div className="title">
						<p>Реновация территории</p>
					</div>
					<div className="description">
						<p>
							Мы специализируемся на предоставлении услуг по реновации территорий, которые
							включают в себя различные аспекты, такие как обновление городской среды,
							улучшение ландшафта, совершенствование инфраструктуры и редевелопмент
							недвижимости.
						</p>
					</div>
				</div>

				{/* Slide 4 */}
				<div
					className="directions-main-l-c-info"
					style={{ display: currentSlideIndex === 4 ? "flex" : "none" }}
				>
					<div className="title">
						<p>Земляные работы</p>
					</div>
					<div className="description">
						<p>
							Наша компания специализируется на земляных работах, которые представляют собой
							процесс извлечения грунта, породы или других материалов с определенной площадки
							для создания основания под строительные объекты, горные работы или другие цели.
							Земляные работы являются неотъемлемой частью различных отраслей промышленности,
							включая строительство, гражданское строительство и развитие инфраструктуры.
						</p>
					</div>
				</div>

				{/* Slide 5 */}
				<div
					className="directions-main-l-c-info"
					style={{ display: currentSlideIndex === 5 ? "flex" : "none" }}
				>
					<div className="title">
						<p>Разработка и ограждение котлованов</p>
					</div>
					<div className="description">
						<p>
							При планировании котлованов и траншей учитываются различные факторы, такие как
							состояние грунта, несущая способность и меры безопасности. разработка
							котлована, как процесс удаления грунта для подготовки основания здания или
							сооружения, требует тщательного планирования для обеспечения успеха. На этом
							этапе ограждение обеспечивает необходимую поддержку стен котлована,
							предотвращая обрушение грунта и сохраняя устойчивость на протяжении всего
							процесса.
						</p>
					</div>
				</div>
				<div className="directions-main-l-c-links">
					<div className="slider">
						<div className="slider-text">
							<p>
								{currentSlideIndex}/{totalSlides}
							</p>
						</div>
						<div className="arrows">
							<button onClick={prevSlide}>
								<LeftArrowSVG />
							</button>
							<button onClick={nextSlide}>
								<RightArrowSVG />
							</button>
						</div>
					</div>
					<Button className="directions-link-button">
						<p>Смотреть полностью</p>
						<ShareIcon />
					</Button>
				</div>
			</div>
			<img src={slideImages[currentSlideIndex - 1]} alt="Directions" />
		</div>
	)
}

export default SliderComponent
