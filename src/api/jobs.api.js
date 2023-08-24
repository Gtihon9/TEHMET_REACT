import { $instance } from "./index"

export const JobsApi = {
	getAllJobs: (limit, offset) => $instance.get(`/vacancies/?limit=${limit}&offset=${offset}`),
	getOneJob: id => $instance.get(`/vacancies/${id}/`),
}
