import { useState, useEffect } from "react"
import phoneIcon from "../../images/phone-icon.svg"
import Logo from "../../images/logo.png"
import LogoText from "../../images/logoText.png"
import PhoneIconMobile from "../../images/phone-icon-mobile.png"
import MenuIconOpened from "../Icons/MenuIconOpened"
import MenuIconClosed from "../Icons/MenuIconClosed"
import "./Header.css"

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
			<div className="header-container container">
				<div className="logo">
					<div className="logo-wrapper">
						<a href="/" style={{ display: "contents" }}>
							<img className="logo-image" src={Logo} alt="Logo" />
							<img className="logo-image-text" src={LogoText} alt="Logo Text" />
						</a>
					</div>
				</div>
				<nav>
					<ul className="nav-links">
						<li>
							<a href="/company">О компании</a>
						</li>
						<li>
							<a href="/projects">Проекты</a>
						</li>
						<li>
							<a href="/deals">Услуги</a>
						</li>
						<li>
							<a href="/rent">Аренда</a>
						</li>
						<li>
							<a href="/news">Новости</a>
						</li>
						<li>
							<a href="/jobs">Вакансии</a>
						</li>
					</ul>
				</nav>
				<div className="contact-info">
					<div className="contact-info-container">
						{isMobileScreen ? (
							<a href="/contact-us">
								<img
									src={PhoneIconMobile}
									className="phone-icon-button"
									alt="Phone Icon Mobile"
								/>
							</a>
						) : (
							<>
								<img src={phoneIcon} className="phone-icon" alt="Phone Icon" />
								<a href="/contact-us" className="contact-info-text">
									+7-916-900-42-55
								</a>
							</>
						)}
					</div>
				</div>
				<div className="mobile-menu-container">
					<div className="menu-icon" onClick={handleMobileMenuToggle}>
						{showMobileMenu ? <MenuIconClosed /> : <MenuIconOpened />}
					</div>
					{showMobileMenu && (
						<nav className={`mobile-nav-links ${menuAnimation ? "slide-in" : "slide-out"}`}>
							<ul>
								<li>
									<a href="/company">О компании</a>
								</li>
								<li>
									<a href="/projects">Проекты</a>
								</li>
								<li>
									<a href="/deals">Услуги</a>
								</li>
								<li>
									<a href="/rent">Аренда</a>
								</li>
								<li>
									<a href="/news">Новости</a>
								</li>
								<li>
									<a href="/jobs">Вакансии</a>
								</li>
							</ul>
						</nav>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
