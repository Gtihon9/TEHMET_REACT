import "./ScrollTopButton.css"
import { Button } from "../Button/Button"
import { ArrowUp } from "../Icons/ArrowUp"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const ScrollTopButton = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
		})
	}

	const [scrollPosition, setScrollPosition] = useState(0)
	const handleScroll = () => {
		const position = window.scrollY
		setScrollPosition(position)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<AnimatePresence>
			{scrollPosition > 600 && (
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 40, transition: { duration: 0.2 } }}
					className="scroll-button-container"
				>
					<Button className="scroll-button" onClick={scrollToTop}>
						<ArrowUp />
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
