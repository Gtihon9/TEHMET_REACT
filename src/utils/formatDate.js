import moment from "moment"
import "moment/locale/ru"

export const formatDate = date => {
	return moment(date).format("LL")
}
