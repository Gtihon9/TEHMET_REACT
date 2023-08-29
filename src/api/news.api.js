import { $instance } from "./index"

export const NewsApi = {
	getAllNews: (limit, offset) => $instance.get(`/news/?limit=${limit}&offset=${offset}`),
	getNewsById: id => $instance.get(`/news/${id}/`),
}
