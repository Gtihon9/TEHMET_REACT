import { Link } from "react-router-dom"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { Button } from "../Button/Button"
import { ShareIcon } from "../Icons/ShareIcon"
import "./ServicesItem.css"
import { PhotoProvider, PhotoView } from "react-photo-view"
import { LazyImage } from "../LazyImage/LazyImage"

export const ServicesItem = ({ service }) => {
	return (
		<div className="services-item">
			<div className="services-item-content">
				<ArrowHeading title={service.name} description={service.description} />
				<Link to={service.id} className="services-item-content-button">
					<Button>
						Подробнее
						<ShareIcon />
					</Button>
				</Link>
			</div>
			<PhotoProvider>
				<div className="services-item-image">
					<PhotoView src={service.logo}>
						<LazyImage
							alt={service.title}
							src={service.logo}
							placeholderSrc={service.compressed_logo}
						/>
					</PhotoView>
				</div>
			</PhotoProvider>
		</div>
	)
}
