import Home from "./pages/Home"
import Company from "./pages/Company"
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import Jobs from "./pages/Jobs"
import News from "./pages/News"
import Projects from "./pages/Projects"
import Rent from "./pages/Rent"
import Deals from "./pages/Deals"
import { JobDetailsPage } from "./pages/JobDetails"

const App = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/company" element={<Company />} />
					<Route path="/jobs" element={<Jobs />} />
					<Route path="/jobs/:id" element={<JobDetailsPage />} />
					<Route path="/news" element={<News />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/deals" element={<Deals />} />
					<Route path="/rent" element={<Rent />} />

					{/*Navigated to Home page if route is not defined*/}
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
