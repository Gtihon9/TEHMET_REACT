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

const filterJobs = (jobs, query) => {
	if (!query) {
		return jobs
	}
	return jobs.filter(job => {
		const jobName = job.name.toLowerCase()
		return jobName.includes(query.toLowerCase())
	})
}

const LIMIT = 10
export const Jobs = () => {
	const [searchParams, _] = useSearchParams()
	const page = parseInt(searchParams.get("page")) || 1

	const [response, setResponse] = useState()
	const [isLoading, setIsLoading] = useState(true)

	const [searchQuery, setSearchQuery] = useState("")
	const debouncedQuery = useDebounce(searchQuery, 300)
	const filteredJobs = filterJobs(response?.results, debouncedQuery)

	const handleChange = e => {
		setSearchQuery(e.target.value)
	}

	const totalPages = Number.isNaN(Math.ceil(response?.count / LIMIT))
		? 0
		: Math.ceil(response?.count / LIMIT)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const res = await JobsApi.getAllJobs(LIMIT, (page - 1) * LIMIT)
				setResponse(res.data)
			} catch (err) {
				console.log(err)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [page])

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
					<SectionHeading
						title={"Вакансии в Техметсервис"}
						description={
							"Наша компания постоянно растет и мы заинтересованы в поиске хороших сотрудников в нашу команду"
						}
					/>

					<div className="jobs">
						<ArrowHeading title="Новые вакансии" />

						<SearchJobs value={searchQuery} onChange={handleChange} />

						{isLoading ? (
							<Spinner />
						) : (
							<motion.div {...containerMotionProps} className="jobs-list">
								{filteredJobs.map(job => (
									<JobsItem key={job.id} job={job} />
								))}
							</motion.div>
						)}
					</div>

					<Pagination pageCount={totalPages} />
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
