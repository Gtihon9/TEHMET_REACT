import LeftArrowSVG from "../Icons/L_Arrow"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { JobsItem } from "./JobsItem"
import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { motion } from "framer-motion"
import "./Jobs.css"
import { SearchJobs } from "./SearchJobs"
import { useEffect, useState } from "react"
import { useDebounce } from "../../hooks/useDebounce"
import { JobsApi } from "../../api/jobs.api"
import { Spinner } from "../Spinner/Spinner"
import { Pagination } from "../Pagination/Pagination"
import { getTotalPages } from "../../utils/getTotalPages"
import { Error } from "../Error/Error"

const LIMIT = 10
export const Jobs = () => {
	const [searchParams, _] = useSearchParams()
	const page = parseInt(searchParams.get("page")) || 1

	const [response, setResponse] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	const [searchQuery, setSearchQuery] = useState("")
	const debouncedQuery = useDebounce(searchQuery, 300)

	const handleChange = e => {
		setSearchQuery(e.target.value)
	}

	const totalPages = getTotalPages(response?.count, LIMIT)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const res = await JobsApi.getAllJobs(
					LIMIT,
					(page - 1) * LIMIT,
					encodeURI(debouncedQuery)
				)
				setResponse(res.data)
				setError(null)
			} catch (err) {
				setError(err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [page, debouncedQuery])

	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				<div className="jobs-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/<Link to="/jobs">Вакансии</Link>
						</div>
					</div>

					{!isLoading && error ? (
						<div className="jobs-error-wrapper">
							<Error />
						</div>
					) : (
						<>
							<SectionHeading
								title={"Вакансии в Техметсервис"}
								description={
									"Наша компания постоянно растет и мы заинтересованы в поиске хороших сотрудников в нашу команду"
								}
							/>

							<div className="jobs">
								<ArrowHeading
									title="Новые вакансии"
									description={
										response?.results?.length <= 0 && searchQuery.trim() === ""
											? "На данный момент наша компания не ищет новых сотрудников, но вы можете отправить свое резюме, а также связаться с нами по телефону или электронной почте."
											: ""
									}
									style={{ maxWidth: 780 }}
								/>

								<SearchJobs value={searchQuery} onChange={handleChange} />

								{isLoading ? (
									<Spinner />
								) : (
									<motion.div {...containerMotionProps} className="jobs-list">
										{response?.results?.map(job => (
											<JobsItem key={job.id} job={job} />
										))}
									</motion.div>
								)}
							</div>

							<Pagination pageCount={totalPages} />
						</>
					)}
				</div>
			</div>
		</motion.main>
	)
}

const containerMotionProps = {
	variants: {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.6,
				delayChildren: 0.3,
				staggerChildren: 0.15,
			},
		},
	},
	initial: "hidden",
	animate: "show",
}
