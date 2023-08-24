import { $instance } from "./index"

export const JobsApi = {
	getAllJobs: () => $instance.get("/vacancies/"),
}
