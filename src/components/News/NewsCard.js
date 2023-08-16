import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import "./NewsCard.css"

export const NewsCard = ({ item, isHero }) => {
	return (
		<div className="news-card">
			<div className="news-card-image">
				<img alt={item.name} src={item.image} />
				<div className="backdrop" />
			</div>
			<div className={`news-card-content ${isHero ? "hero" : ""}`}>
				<Link to={`/news/${item.id}`}>
					<Button>
						Подробнее
					</Button>
				</Link>
				<div className="news-card-info">
					<div className="news-card-title">
						<h1>{item.title}</h1>
						{item.description && <p>{item.description}</p>}
					</div>
					<span>{item.date}</span>
				</div>
			</div>
		</div>
	)
}
