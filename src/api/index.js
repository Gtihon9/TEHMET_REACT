import axios from "axios"

export const $instance = axios.create({
	baseURL: "https://api.tehmetservice.ru/api/v1",
})
