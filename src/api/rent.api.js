import { $instance } from "./index"

export const RentApi = {
	getAllRents: (limit, offset, name) =>
		$instance.get(`/equipments/?limit=${limit}&offset=${offset}&name=${name}`),
}
