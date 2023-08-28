export const containerMotionProps = {
	variants: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.6,
				delayChildren: 0.3,
				staggerChildren: 0.15,
			},
		},
	},
	initial: "hidden",
	animate: "show",
}

export const staggerChildrenMotionProps = {
	variants: {
		hidden: {
			y: 50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.6,
			},
		},
	},
}
