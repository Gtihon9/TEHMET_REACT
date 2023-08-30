import { $instance } from "./index"

export const ProjectsApi = {
	getAllProjects: (service, limit, offset) =>
		$instance.get(`/projects/`, {
			params: {
				service,
				limit,
				offset,
			},
		}),
	getProjectById: id => $instance.get(`/projects/${id}/`),
}
