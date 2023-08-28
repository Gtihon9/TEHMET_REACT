import { Link } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { NewsCard } from "./NewsCard"
import LeftArrowSVG from "../Icons/L_Arrow"
import { motion } from "framer-motion"
import "./News.css"
import { Pagination } from "../Pagination/Pagination"
import { useApi } from "../../hooks/useApi"
import { NewsApi } from "../../api/news.api"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { formatDate } from "../../utils/formatDate"

export const News = () => {
	const { response: news, loading, error } = useApi(NewsApi.getAllNews)

	const newsList = news?.results

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

					{loading ? (
						<Spinner />
					) : error ? (
						<div>
							<Error />
						</div>
					) : (
						<>
							<SectionHeading
								className="news-heading-section"
								title="Новости"
								description="Новости нашей компании"
							/>

							<div className="news-big-container" data-amount={newsList?.length}>
								<NewsCard
									item={{
										title: newsList?.[0].title,
										logo: newsList?.[0].logo,
										created_at: formatDate(newsList?.[0].created_at),
										link: `/news/${newsList?.[0].id}`,
									}}
								/>
								{newsList
									?.slice(1, newsList?.length >= 3 ? 3 : newsList?.length)
									.map(item => (
										<NewsCard
											key={item.id}
											item={{
												title: item.title,
												logo: item.logo,
												created_at: formatDate(item?.created_at),
												link: `/news/${newsList?.[0].id}`,
											}}
										/>
									))}
							</div>

							<div className="news-list">
								{/*{Array.from({ length: 10 }, () => Object.assign({}, news[1])).map(*/}
								{/*	(item, index) => (*/}
								{/*		<NewsCard key={item.id + item.title + index} item={item} />*/}
								{/*	)*/}
								{/*)}*/}
							</div>

							<Pagination pageCount={1} />
						</>
					)}
				</div>
			</div>
		</motion.main>
	)
}
