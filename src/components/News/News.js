import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { NewsCard } from "./NewsCard"
import LeftArrowSVG from "../Icons/L_Arrow"
import { motion } from "framer-motion"
import "./News.css"
import { Pagination } from "../Pagination/Pagination"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { formatDate } from "../../utils/formatDate"
import { getTotalPages } from "../../utils/getTotalPages"
import useSWR from "swr"
import { fetcher } from "../../api"

export const News = () => {
	const [searchParams] = useSearchParams()
	const page = parseInt(searchParams.get("page")) || 1

	const limit = 11
	const offset = (page - 1) * limit
	const fetchUrl = `/news/?limit=${limit}&offset=${offset}`

	const { data: news, isLoading, error } = useSWR(fetchUrl, fetcher)

	const totalPages = getTotalPages(news?.count, limit)

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

					{isLoading ? (
						<Spinner />
					) : error || newsList?.length <= 0 ? (
						<div className="news-error-wrapper">
							<Error
								title="Лента новостей недоступна :("
								message="Загляните в ближайшее время, чтобы узнать новости нашей компании"
							/>
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
										title: newsList?.[0]?.title,
										logo: newsList?.[0]?.logo,
										compressed_logo: newsList?.[0]?.compressed_logo,
										created_at: formatDate(newsList?.[0]?.created_at),
										link: `/news/${newsList?.[0]?.id}`,
									}}
								/>
								{newsList
									?.slice(1, newsList?.length >= 3 ? 3 : newsList?.length)
									.map(item => (
										<NewsCard
											key={item?.id}
											item={{
												title: item?.title,
												logo: item?.logo,
												compressed_logo: item?.compressed_logo,
												created_at: formatDate(item?.created_at),
												link: `/news/${item?.id}`,
											}}
										/>
									))}
							</div>

							{newsList?.length > 3 && (
								<div className="news-list">
									{newsList?.slice(3, newsList?.length).map(item => (
										<NewsCard
											key={item.id}
											item={{
												title: item.title,
												logo: item.logo,
												compressed_logo: item?.compressed_logo,
												created_at: formatDate(item?.created_at),
												link: `/news/${item?.id}`,
											}}
										/>
									))}
								</div>
							)}
						</>
					)}
					<Pagination pageCount={totalPages} />
				</div>
			</div>
		</motion.main>
	)
}
