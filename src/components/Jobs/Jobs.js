import LeftArrowSVG from "../Icons/L_Arrow"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { JobsItem } from "./JobsItem"
import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { motion } from "framer-motion"
import "./Jobs.css"
import { useState } from "react"
import { useDebounce } from "../../hooks/useDebounce"
import { Spinner } from "../Spinner/Spinner"
import { Pagination } from "../Pagination/Pagination"
import { getTotalPages } from "../../utils/getTotalPages"
import { Error } from "../Error/Error"
import { containerMotionProps } from "../../utils/animationProps"
import { SearchBar } from "../SearchBar/SearchBar"
import useSWR from "swr"
import { fetcher } from "../../api"
import { EmptyState } from "../EmptyState/EmptyState"

export const Jobs = () => {
	const [searchQuery, setSearchQuery] = useState("")
	const debouncedQuery = useDebounce(searchQuery, 450)

	const handleChange = e => {
		setSearchQuery(e.target.value)
	}

	const [searchParams] = useSearchParams()
	const page = parseInt(searchParams.get("page")) || 1

	const limit = 10
	const offset = (page - 1) * limit
	const equipmentName = encodeURI(debouncedQuery)
	const fetchUrl =
		debouncedQuery.trim() === ""
			? `/vacancies/?limit=${limit}&offset=${offset}`
			: `/vacancies/?limit=${limit}&offset=${offset}&name=${equipmentName}`

	const { data: vacancies, isLoading, error } = useSWR(fetchUrl, fetcher)

	const totalPages = getTotalPages(vacancies?.count, limit)

	const { data: check } = useSWR("/vacancies/?limit=10&offset=0", fetcher, {
		revalidateOnFocus: false,
	})

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
					{error && (
						<div className="jobs-error-wrapper">
							<Error />
						</div>
					)}
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
									vacancies?.count === 0 && !isLoading && debouncedQuery.length === 0
										? "На данный момент наша компания не ищет новых сотрудников, но вы можете отправить свое резюме, а также связаться с нами по телефону или электронной почте."
										: ""
								}
								style={{ maxWidth: 780 }}
							/>
							{check?.count !== 0 && (
								<SearchBar
									value={searchQuery}
									onChange={handleChange}
									placeholder="Поиск по вакансиям..."
								/>
							)}
							{isLoading && <Spinner minHeight="60vh" />}
							{vacancies?.count === 0 && debouncedQuery.length > 0 && !error && (
								<div className="jobs-empty-wrapper">
									<EmptyState />
								</div>
							)}
							<motion.div {...containerMotionProps} className="jobs-list">
								{vacancies?.results?.map(job => (
									<JobsItem key={job.id} job={job} />
								))}
							</motion.div>
						</div>

						<Pagination pageCount={totalPages} />
					</>
				</div>
			</div>
		</motion.main>
	)
}
