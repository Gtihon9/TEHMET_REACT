import { $instance } from "./index"

export const NewsApi = {
	getAllNews: () => $instance.get("/news/"),
	getNewsById: id => $instance.get(`/news/${id}/`),
}
