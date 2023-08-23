import { createPortal } from "react-dom"

export function ReactPortal({ children, wrapperId = "react-portal-wrapper" }) {
	let element = document.getElementById(wrapperId)

	if (!element) {
		element = createWrapperAndAppendToBody(wrapperId)
	}

	return createPortal(children, element)
}

function createWrapperAndAppendToBody(wrapperId) {
	const wrapperElement = document.createElement("div")
	wrapperElement.setAttribute("id", wrapperId)
	document.body.appendChild(wrapperElement)
	return wrapperElement
}
