export const getTotalPages = (totalCount, limit) => {
	return Number.isNaN(Math.ceil(totalCount / limit)) ? 0 : Math.ceil(totalCount / limit)
}
