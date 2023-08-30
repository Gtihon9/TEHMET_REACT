import { NewsCard } from "../News/NewsCard"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import "./OtherNews.css"
import { useParams } from "react-router-dom"
import { useApi } from "../../hooks/useApi"
import { NewsApi } from "../../api/news.api"
import { Spinner } from "../Spinner/Spinner"
import { formatDate } from "../../utils/formatDate"

export const OtherNews = () => {
	const { id } = useParams()

	const { response: news, loading, error } = useApi(NewsApi.getAllNews)
	const filteredNews = news?.results?.filter(item => item.id !== id)

	if (loading) return <Spinner />

	if (error || filteredNews?.length <= 0) return null

	return (
		<div className="other-news-container">
			<ArrowHeading title="Другие новости" />
			<div className="other-news-list">
				{filteredNews?.map(item => (
					<NewsCard
						key={item.id}
						item={{
							title: item.title,
							logo: item.logo,
							compressed_logo: item.compressed_logo,
							created_at: formatDate(item?.created_at),
							link: `/news/${item?.id}`,
						}}
					/>
				))}
			</div>
		</div>
	)
}
