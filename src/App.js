import { BrowserRouter as Router, } from "react-router-dom"
import { ScrollToTop } from "./utils/ScrollToTop"
import { AnimatedRoutes } from "./components/AnimatedRoutes/AnimatedRoutes"

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<AnimatedRoutes />
		</Router>
	)
}

export default App
