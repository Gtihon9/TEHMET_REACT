import { $instance } from "./index"

export const RentApi = {
	getAllRents: (limit, offset) => $instance.get(`/rent/?limit=${limit}&offset=${offset}`),
}
