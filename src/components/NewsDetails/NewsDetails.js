import LeftArrowSVG from "../Icons/L_Arrow"
import { ShareIcon } from "../Icons/ShareIcon"
import { Link, useParams } from "react-router-dom"
import { OtherNews } from "./OtherNews"
import { ImageSwiper } from "./ImageSwiper"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import { newsImages } from "./NewsDetails.constants"
import { motion } from "framer-motion"
import "./NewsDetails.css"
import { useState } from "react"
import { PhotoProvider, PhotoView } from "react-photo-view"

export const NewsDetails = () => {
	const [isGalleryVisible, setIsGalleryVisible] = useState(false)

	const { id } = useParams()

	const copy = async text => {
		await navigator.clipboard.writeText(text)
	}

	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				<div className="news-details-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/<Link to="/news">Новости</Link>/
							<Link to={`/news/${id}`}>Подписание нового контракта с [Компания]</Link>
						</div>
					</div>

					<div className="news-details">
						<div className="news-details-swiper-wrapper">
							<ImageSwiper />
						</div>

						<div className="news-details-swiper-wrapper-mobile">
							<MobileSwiper>
								{newsImages.map((image, index) => (
									<SwiperSlide key={index}>
										<PhotoProvider>
											<PhotoView src={image.imageUrl}>
												<img src={image.imageUrl} />
											</PhotoView>
										</PhotoProvider>
									</SwiperSlide>
								))}
							</MobileSwiper>
						</div>

						<div className="news-details-body">
							<h1>Подписание нового контракта с [Компания]</h1>
							<p>
								25 числа Техметсервис выиграл тендер на реновацию территории. В рамках
								захватывающего сотрудничества компания "А" недавно подписала с компанией "Б"
								принципиально новый контракт на масштабную реконструкцию выделенной
								территории. Это многообещающее партнерство обещает превратить ландшафт в
								современное чудо, открывающее новые возможности для развития, прогресса и
								улучшения жизни общества. По мере объединения опыта и ресурсов этих двух
								лидеров отрасли растет ожидание грядущих замечательных перемен.
								<br />
								<br />
								Компании А и Б являются признанными лидерами в своих отраслях. Компания А
								имеет многолетнюю репутацию лидера, успешно реализовав множество проектов, в
								которых инновации сочетаются с устойчивым развитием. С другой стороны,
								компания B заслужила признание за передовые дизайнерские решения и
								технический опыт в создании впечатляющих пространств. Этот альянс объединяет
								лучшие качества обоих миров и создает основу для беспрецедентных
								преобразований.
								<br />
								<br />
								Видение проекта
								<br />
								<br />
								Территория, предназначенная для реконструкции, обладает огромным
								потенциалом, и компании А и Б стремятся вдохнуть в нее новую жизнь. Их общее
								видение заключается в создании многофункционального пространства,
								способствующего формированию чувства общности, стимулирующего социальное
								взаимодействие и демонстрирующего чудеса современной архитектуры. Применяя
								методы устойчивого развития, компании стремятся показать пример экологичного
								развития, заботящегося об окружающей среде и благополучии будущих поколений.
								<br />
								<br />
								Ключевые особенности проекта реконструкции
								<br />
								<br />
								Устойчивый дизайн: Одной из основных целей проекта является достижение
								нулевого воздействия на окружающую среду. Компания А и компания Б стремятся
								использовать экологически чистые строительные материалы, энергоэффективные
								системы и экологически чистую инфраструктуру, чтобы обеспечить соответствие
								проекта самым высоким стандартам экологической безопасности.
								<br />
								<br />
								Повышенная доступность: Реконструируемая территория будет спроектирована с
								учетом потребностей людей с разными возможностями, что сделает ее
								инклюзивной и гостеприимной. Продуманные тротуары, пандусы и сооружения
								обеспечат удобный доступ для всех желающих.
							</p>
						</div>

						<div className="news-details-footer">
							<p>
								Автор: <span>Имя автора</span>
							</p>
							<p>
								Дата публикации: <span>14 мая 2023</span>
							</p>
							<button className="share-button" onClick={() => copy(window.location.href)}>
								Поделиться
								<ShareIcon />
							</button>
						</div>
					</div>

					<OtherNews />
				</div>
			</div>
		</motion.main>
	)
}
