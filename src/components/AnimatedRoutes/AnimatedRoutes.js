import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { HomePage } from "../../pages/Home"
import { CompanyPage } from "../../pages/Company"
import { JobsPage } from "../../pages/Jobs"
import { JobDetailsPage } from "../../pages/JobDetails"
import { NewsPage } from "../../pages/News"
import { NewsDetailsPage } from "../../pages/NewsDetails"
import { ProjectsPage } from "../../pages/Projects"
import { ServicesPage } from "../../pages/Services"
import { RentPage } from "../../pages/Rent"
import { ServicesDetailsPage } from "../../pages/ServicesDetails"
import { AnimatePresence } from "framer-motion"
import { PrivacyPolicy } from "../PrivacyPolicy/PrivacyPolicy"

export const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<HomePage />} />
				<Route path="/company" element={<CompanyPage />} />
				<Route path="/jobs" element={<JobsPage />} />
				<Route path="/jobs/:id" element={<JobDetailsPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/news/:id" element={<NewsDetailsPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/services" element={<ServicesPage />} />
				<Route path="/services/:id" element={<ServicesDetailsPage />} />
				<Route path="/rent" element={<RentPage />} />
				<Route path="/conf" element={<PrivacyPolicy />} />

				{/*Navigated to Home page if route is not defined*/}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</AnimatePresence>
	)
}
