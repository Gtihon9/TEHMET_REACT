import "./LazyImage.css"
import { forwardRef, useEffect, useState } from "react"

export const LazyImage = forwardRef((props, ref) => {
	const [imageSrc, setImageSrc] = useState(props.placeholder ?? props.src)

	useEffect(() => {
		const img = new Image()
		img.src = props.src
		img.onload = () => setImageSrc(props.src)
	}, [props.src])

	const cn = `lazy-image ${props.placeholder === imageSrc ? "loading" : "loaded"} ${
		props.className ? props.className : ""
	}`

	return (
		<img
			ref={ref}
			alt={props.alt || ""}
			src={props.imageSrc}
			width="100%"
			height="100%"
			className={cn}
			{...props}
		/>
	)
})
