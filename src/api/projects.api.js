import { $instance } from "./index"

export const ProjectsApi = {
	getAllProjects: service =>
		$instance.get(`/projects/`, {
			params: {
				service,
			},
		}),
	getProjectById: id => $instance.get(`/projects/${id}/`),
}
