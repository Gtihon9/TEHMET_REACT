import { $instance } from "./index"

export const ContactFormApi = {
	feedbackEmail: body => $instance.post("/feedback/email/", body),
	feedbackProject: body => $instance.post("/feedback/project", body),
}
