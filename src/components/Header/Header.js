import { useState } from "react"
import { PhoneIcon } from "../Icons/PhoneIcon"
import { PhoneIconMobile } from "../Icons/PhoneIconMobile"
import MenuIconOpened from "../Icons/MenuIconOpened"
import MenuIconClosed from "../Icons/MenuIconClosed"
import "./Header.css"
import { NavLink } from "react-router-dom"
import { Button } from "../Button/Button"
import { headerLinks } from "./Header.constants"
import { AnimatePresence, motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import { Logo } from "../Logo/Logo"

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	const handleMobileMenuToggle = () => setShowMobileMenu(!showMobileMenu)

	document.body.style.overflow = showMobileMenu ? "hidden" : "auto"

	const isMedium = useMediaQuery({ query: `(max-width: 1216px)` })

	return (
		<header className="header">
			<div className="container">
				<div className="header-container">
					<Logo />
					<nav className="header-navigation">
						<ul className="nav-links">
							{headerLinks.map(link => (
								<li key={link.href} className="nav-links-item">
									<NavLink to={link.href}>
										{({ isActive }) => (
											<>
												{link.name}
												{isActive ? (
													<motion.div
														layoutId="underline"
														className="nav-links-item-underline"
													/>
												) : null}
											</>
										)}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<div className="header-actions">
						<a href="tel:+79169004255">
							{isMedium ? (
								<button className="header-actions-contact-mobile">
									<PhoneIconMobile />
								</button>
							) : (
								<Button className="header-actions-contact">
									<PhoneIcon />
									<span>+7-916-900-42-55</span>
								</Button>
							)}
						</a>
						<div className="mobile-menu-container">
							<div className="menu-icon" onClick={handleMobileMenuToggle}>
								{showMobileMenu ? <MenuIconClosed /> : <MenuIconOpened />}
							</div>
							<AnimatePresence>
								{showMobileMenu && (
									<motion.div
										className="mobile-menu"
										initial={{ x: 1000 }}
										animate={{ x: 0 }}
										exit={{ x: 1000 }}
										transition={{ bounce: 0 }}
									>
										<nav className="mobile-nav-links">
											<ul>
												{headerLinks.map(link => (
													<li key={link.href} onClick={() => setShowMobileMenu(false)}>
														<NavLink to={link.href}>{link.name}</NavLink>
													</li>
												))}
											</ul>
										</nav>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
