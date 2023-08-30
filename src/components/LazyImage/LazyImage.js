import "./LazyImage.css"
import { useEffect, useState } from "react"

export const LazyImage = ({ placeholderSrc, alt, src, className, props }) => {
	const [imageSrc, setImageSrc] = useState(placeholderSrc ?? src)

	useEffect(() => {
		const img = new Image()
		img.src = src
		img.onload = () => setImageSrc(src)
	}, [src])

	const cn = `lazy-image ${placeholderSrc === imageSrc ? "loading" : "loaded"} ${
		className ? className : ""
	}`

	return (
		<img alt={alt || ""} src={imageSrc} width="100%" height="100%" className={cn} {...props} />
	)
}
