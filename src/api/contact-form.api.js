import { $instance } from "./index"

export const ContactFormApi = {
	feedbackLanding: body => $instance.post("/feedback/landing/", body),
	feedbackProject: body => $instance.post("/feedback/project/", body),
}
