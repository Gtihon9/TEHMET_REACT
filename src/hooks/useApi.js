import { useState, useEffect } from "react"

export function useApi(fn) {
	const [response, setResponse] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const fetchData = async () => {
		setLoading(true)
		try {
			const res = await fn()
			setResponse(res.data)
			setError(null)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { response, error, loading }
}
