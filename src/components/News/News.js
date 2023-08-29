import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { NewsCard } from "./NewsCard"
import LeftArrowSVG from "../Icons/L_Arrow"
import { motion } from "framer-motion"
import "./News.css"
import { Pagination } from "../Pagination/Pagination"
import { NewsApi } from "../../api/news.api"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { formatDate } from "../../utils/formatDate"
import { useEffect, useState } from "react"
import { getTotalPages } from "../../utils/getTotalPages"

const LIMIT = 11

export const News = () => {
	const [searchParams, _] = useSearchParams()
	const page = parseInt(searchParams.get("page")) || 1

	const [response, setResponse] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	const totalPages = getTotalPages(response?.count, LIMIT)
	const newsList = response?.results

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const res = await NewsApi.getAllNews(LIMIT, (page - 1) * LIMIT)
				setResponse(res.data)
				setError(null)
			} catch (err) {
				setError(err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [page])

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
