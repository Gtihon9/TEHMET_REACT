import { NewsCard } from "../News/NewsCard"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import "./OtherNews.css"
import { useParams } from "react-router-dom"
import { useApi } from "../../hooks/useApi"
import { NewsApi } from "../../api/news.api"
import { Spinner } from "../Spinner/Spinner"

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
					<NewsCard key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}
