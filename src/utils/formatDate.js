export function formatDate(dateTimeString) {
	return new Date(dateTimeString).toLocaleString("ru-RU", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})
}
