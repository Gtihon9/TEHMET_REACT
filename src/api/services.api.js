import { $instance } from "./index"

export const ServicesApi = {
	getAllServices: () => $instance.get("/services/"),
	getServiceById: id => $instance.get(`/services/${id}/`),
}
