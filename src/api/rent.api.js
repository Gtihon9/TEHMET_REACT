import { $instance } from "./index"

export const RentApi = {
	getAllRents: (limit, offset) => $instance.get(`/equipments/?limit=${limit}&offset=${offset}`),
}
