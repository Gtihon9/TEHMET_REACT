import { $instance } from "./index"

export const ProjectsApi = {
	getAllProjects: async () => $instance.get("/projects"),
}
