import { motion, AnimatePresence } from "framer-motion"
import { useCallback, useEffect } from "react"
import { ReactPortal } from "../../utils/ReactPortal"
import "./Modal.css"
import MenuIconClosed from "../Icons/MenuIconClosed"

export const Modal = ({ isOpen, onClose, children, maxWidth }) => {
	const handleWindowKeyDown = useCallback(
		e => {
			if (e.key === "Escape") {
				onClose()
			}
		},
		[onClose]
	)

	useEffect(() => {
		window.addEventListener("keydown", handleWindowKeyDown)
		return () => window.removeEventListener("keydown", handleWindowKeyDown)
	}, [handleWindowKeyDown])

	return (
		<ReactPortal wrapperId="modal-portal">
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							className="modal"
							key="modal"
							role="dialog"
							aria-modal="true"
							style={{ maxWidth }}
							{...defaultModalAnimation}
						>
							<button type="button" className="modal-close-btn" onClick={onClose}>
								<MenuIconClosed />
							</button>

							<div className="modal-content">{children}</div>
						</motion.div>

						<motion.div
							className="modal-backdrop"
							key="modal-backdrop"
							{...defaultModalBackdropAnimation}
							onClick={onClose}
						/>
					</>
				)}
			</AnimatePresence>
		</ReactPortal>
	)
}

const defaultModalAnimation = {
	transition: { duration: 0.2, delay: 0.1, ease: "easeInOut" },
	initial: { opacity: 0, scale: 0.9, y: 20 },
	animate: { opacity: 1, scale: 1, y: 0 },
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
}

const defaultModalBackdropAnimation = {
	transition: { duration: 0.2, ease: "easeInOut" },
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
}
