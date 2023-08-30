import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { ShareIcon } from "../Icons/ShareIcon"
import "./Card.css"
import { LazyImage } from "../LazyImage/LazyImage"

export const Card = ({ item }) => {
	return (
		<div className="card">
			<div className="card-image">
				<LazyImage alt={item.title} placeholderSrc={item.compressedImage} src={item.image} />
			</div>
			<div className="card-content">
				<div className="card-header">
					<h1>{item.title}</h1>
					{item.description && <p>{item.description}</p>}
				</div>
				<Link to={item.link} className="card-button">
					<Button>
						Смотреть полностью
						<ShareIcon />
					</Button>
				</Link>
			</div>
		</div>
	)
}
