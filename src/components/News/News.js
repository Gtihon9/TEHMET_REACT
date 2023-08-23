import { Link } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { NewsCard } from "./NewsCard"
import LeftArrowSVG from "../Icons/L_Arrow"
import { motion } from "framer-motion"
import "./News.css"

import News1 from "../../images/news1.png"
import News2 from "../../images/news2.png"
import News3 from "../../images/news3.png"
import { Pagination } from "../Pagination/Pagination"

export const News = () => {
	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				<div className="news-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/<Link to="/news">Новости</Link>
						</div>
					</div>

					<SectionHeading
						className="news-heading-section"
						title="Новости"
						description="Новости нашей компании"
					/>

					<div className="news-big-container">
						<NewsCard item={news[0]} />
						{news.slice(1, 3).map(item => (
							<NewsCard key={item.title} item={item} />
						))}
					</div>

					<div className="news-list">
						{Array.from({ length: 10 }, () => Object.assign({}, news[1])).map(
							(item, index) => (
								<NewsCard key={item.id + item.title + index} item={item} />
							)
						)}
					</div>

					<Pagination />
				</div>
			</div>
		</motion.main>
	)
}

const news = [
	{
		id: 1,
		image: News1,
		title: "Подписание нового контракта с [Компания]",
		description: "15 числа Техметсервис выиграл тендер на реновацию... ",
		date: "14 мая 2023",
	},
	{
		id: 2,
		image: News2,
		title: "Покупка нового экскаватора",
		date: "9 вевраль 2023",
	},
	{
		id: 3,
		image: News3,
		title: "Мы переехали!",
		date: "7 июля 2022",
	},
]
