import axios from "axios"

export const $instance = axios.create({
	baseURL: "https://api.tehmetservice.ru/api/v1",
})

export const fetcher = url => $instance.get(url).then(res => res.data)
