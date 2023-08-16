import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { CompanyPage } from "./pages/Company"
import { JobsPage } from "./pages/Jobs"
import { JobDetailsPage } from "./pages/JobDetails"
import { NewsPage } from "./pages/News"
import { NewsDetailsPage } from "./pages/NewsDetails"
import { ProjectsPage } from "./pages/Projects"
import { ServicesPage } from "./pages/Services"
import { RentPage } from "./pages/Rent"
import { ScrollToTop } from "./utils/ScrollToTop"

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/company" element={<CompanyPage />} />
				<Route path="/jobs" element={<JobsPage />} />
				<Route path="/jobs/:id" element={<JobDetailsPage />} />
				<Route path="/news" element={<NewsPage />} />
				<Route path="/news/:id" element={<NewsDetailsPage />} />
				<Route path="/projects" element={<ProjectsPage />} />
				<Route path="/deals" element={<ServicesPage />} />
				<Route path="/rent" element={<RentPage />} />

				{/*Navigated to Home page if route is not defined*/}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	)
}

export default App
