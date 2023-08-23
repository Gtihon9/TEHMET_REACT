import { useState, useEffect } from "react"
import { PhoneIcon } from "../Icons/PhoneIcon"
import { PhoneIconMobile } from "../Icons/PhoneIconMobile"
import MenuIconOpened from "../Icons/MenuIconOpened"
import MenuIconClosed from "../Icons/MenuIconClosed"
import "./Header.css"
import { NavLink } from "react-router-dom"
import { Button } from "../Button/Button"
import { headerLinks } from "./Header.constants"
import { motion } from "framer-motion"
import { LogoIcon } from "../Icons/LogoIcon"

const Header = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const [isMobileScreen, setIsMobileScreen] = useState(
		window.matchMedia("(max-width: 1196px)").matches
	)
	const [menuAnimation, setMenuAnimation] = useState(false)

	const handleMobileMenuToggle = () => {
		setShowMobileMenu(!showMobileMenu)

		// Update menuAnimation state after a brief delay
		setTimeout(() => {
			setMenuAnimation(!menuAnimation)
		}, 10) // Adjust the delay as needed for the animation to work correctly
	}

	useEffect(() => {
		const handleResize = () => {
			setIsMobileScreen(window.matchMedia("(max-width: 1216px)").matches)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	useEffect(() => {
		if (!showMobileMenu) {
			// Reset animation state when menu is hidden
			setMenuAnimation(false)
		}
	}, [showMobileMenu])

	return (
		<header className="header">
			<div className="container">
				<div className="header-container">
					<NavLink to="/" className="logo-container">
						{({ isActive }) => (
							<>
								<div className="logo">
									<LogoIcon />
								</div>
								{isActive ? (
									<motion.div layoutId="underline" className="logo-active" />
								) : null}
							</>
						)}
					</NavLink>
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
							{isMobileScreen ? (
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
							{showMobileMenu && (
								<nav
									className={`mobile-nav-links ${
										menuAnimation ? "slide-in" : "slide-out"
									}`}
								>
									<ul>
										{headerLinks.map(link => (
											<li key={link.href}>
												<NavLink to={link.href}>{link.name}</NavLink>
											</li>
										))}
									</ul>
								</nav>
							)}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
