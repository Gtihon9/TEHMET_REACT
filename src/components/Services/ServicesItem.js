import { Link } from "react-router-dom"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Button } from "../Button/Button"
import { ShareIcon } from "../Icons/ShareIcon"
import "./ServicesItem.css"
import { PhotoProvider, PhotoView } from "react-photo-view"

export const ServicesItem = ({ service }) => {
	return (
		<div className="services-item">
			<div className="services-item-content">
				<ArrowHeading title={service.title} description={service.description} />
				<Link to={service.link} className="services-item-content-button">
					<Button>
						Подробнее
						<ShareIcon />
					</Button>
				</Link>
			</div>
			<PhotoProvider>
				<div className="services-item-image">
					<PhotoView src={service.image}>
						<img alt={service.title} src={service.image} />
					</PhotoView>
				</div>
			</PhotoProvider>
		</div>
	)
}
