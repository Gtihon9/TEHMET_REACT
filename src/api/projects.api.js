import { $instance } from "./index"

export const ProjectsApi = {
	getAllProjects: service =>
		$instance.get(`/projects/`, {
			params: {
				service,
			},
		}),
}
