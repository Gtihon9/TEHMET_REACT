import { useState, useEffect } from "react"
import { PhoneIcon } from "../Icons/PhoneIcon"
import { PhoneIconMobile } from "../Icons/PhoneIconMobile"
import MenuIconOpened from "../Icons/MenuIconOpened"
import MenuIconClosed from "../Icons/MenuIconClosed"
import "./Header.css"
import { Link } from "react-router-dom"
import { Button } from "../Button/Button"
import { Logo } from "../Logo/Logo"

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
					<Logo />
					<nav className="header-navigation">
						<ul className="nav-links">
							<li>
								<Link to="/company">О компании</Link>
							</li>
							<li>
								<Link to="/projects">Проекты</Link>
							</li>
							<li>
								<Link to="/services">Услуги</Link>
							</li>
							<li>
								<Link to="/rent">Аренда</Link>
							</li>
							<li>
								<Link to="/news">Новости</Link>
							</li>
							<li>
								<Link to="/jobs">Вакансии</Link>
							</li>
						</ul>
					</nav>
					<div className="header-actions">
						<Link to="/contact-us">
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
						</Link>
						<div className="mobile-menu-container">
							<div className="menu-icon" onClick={handleMobileMenuToggle}>
								{showMobileMenu ? <MenuIconClosed /> : <MenuIconOpened />}
							</div>
							{showMobileMenu && (
								<nav className={`mobile-nav-links ${menuAnimation ? "slide-in" : "slide-out"}`}>
									<ul>
										<li>
											<Link to="/company">О компании</Link>
										</li>
										<li>
											<Link to="/projects">Проекты</Link>
										</li>
										<li>
											<Link to="/services">Услуги</Link>
										</li>
										<li>
											<Link to="/rent">Аренда</Link>
										</li>
										<li>
											<Link to="/news">Новости</Link>
										</li>
										<li>
											<Link to="/jobs">Вакансии</Link>
										</li>
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
