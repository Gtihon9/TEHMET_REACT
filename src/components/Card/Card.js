import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { ShareIcon } from "../Icons/ShareIcon"
import "./Card.css"
import { LazyImage } from "../LazyImage/LazyImage"

export const Card = ({ item }) => {
	return (
		<div className="card">
			<div className="card-image">
				<LazyImage alt={item.name} placeholder={item.compressedImage} src={item.image} />
			</div>
			<div className="card-content">
				<div className="card-header">
					<h1>{item.name}</h1>
					{item.title && <p>{item.title}</p>}
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
