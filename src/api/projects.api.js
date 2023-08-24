import { $instance } from "./index"

export const ProjectsApi = {
	getAllProjects: () => $instance.get("/projects/"),
}
