import { $instance } from "./index"

export const JobsApi = {
	getAllJobs: (limit, offset, name) =>
		$instance.get(`/vacancies/?limit=${limit}&offset=${offset}&name=${name}`),
	getOneJob: id => $instance.get(`/vacancies/${id}/`),
}
