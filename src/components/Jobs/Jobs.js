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
import { jobsList } from "./Jobs.constants"

const filterJobs = (jobs, query) => {
	if (!query) {
		return jobs
	}
	return jobs.filter(job => {
		const jobName = job.name.toLowerCase()
		return jobName.includes(query.toLowerCase())
	})
}

export const Jobs = () => {
	const [searchParams, setSearchParams] = useSearchParams({})
	const initialQuery = searchParams.get("query")

	const [searchQuery, setSearchQuery] = useState(initialQuery ?? "")
	const debouncedQuery = useDebounce(searchQuery, 300)
	const filteredJobs = filterJobs(jobsList, debouncedQuery)

	const handleChange = e => {
		setSearchQuery(e.target.value)
	}

	useEffect(() => {
		if (debouncedQuery.trim() === "") {
			setSearchParams({})
			setSearchQuery("")
		} else {
			setSearchParams({ query: debouncedQuery })
		}
	}, [debouncedQuery])

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
						<div>{}</div>

						<div className="jobs-list">
							{filteredJobs.map(job => (
								<JobsItem key={job.id} job={job} />
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.main>
	)
}
