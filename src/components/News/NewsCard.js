import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import "./NewsCard.css"
import { LazyImage } from "../LazyImage/LazyImage"
export const NewsCard = ({ item }) => {
	return (
		<div className="news-card">
			<div className="news-card-image">
				<LazyImage alt={item?.title} src={item?.logo} placeholder={item?.compressed_logo} />
				<div className="backdrop" />
			</div>
			<div className="news-card-content">
				<div className="news-card-info">
					<Link to={item?.link}>
						<Button>Подробнее</Button>
					</Link>
					<div className="news-card-title">
						<h1>{item?.title}</h1>
						{item?.description && <p>{item?.description}</p>}
					</div>
				</div>
			</div>
			<span className="news-card-date">{item?.created_at}</span>
		</div>
	)
}
