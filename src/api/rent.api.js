import { $instance } from "./index"

export const RentApi = {
	getAllRents: url => $instance.get(url).then(res => res.data),
}
