import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { RentItem } from "./RentItem"
import { motion } from "framer-motion"
import "./Rent.css"
import LeftArrowSVG from "../Icons/L_Arrow"
import { Pagination } from "../Pagination/Pagination"
import { useEffect, useState } from "react"
import { getTotalPages } from "../../utils/getTotalPages"
import { RentApi } from "../../api/rent.api"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"
import { useDebounce } from "../../hooks/useDebounce"
import { SearchBar } from "../SearchBar/SearchBar"
import { useApi } from "../../hooks/useApi"

const LIMIT = 10

export const Rent = () => {
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
				const res = await RentApi.getAllRents(
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

	const { response: headerResponse, loading: headerLoading } = useApi(() =>
		RentApi.getAllRents(1, 0, "")
	)

	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				<div className="rent-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/<Link to="/rent">Аренда спецтехники</Link>
						</div>
					</div>
					<>
						<SectionHeading
							className="rent-heading-section"
							title="Аренда спецтехники"
							description="Техметсервис предоставляет услугу аренды спецтехники. Мы понимаем, что сроки реализации проектов могут быть непредсказуемыми. Поэтому мы предлагаем гибкие сроки аренды - от нескольких часов до нескольких недель или даже месяцев. Вы можете выбрать тот срок аренды, который наилучшим образом соответствует вашим потребностям, гарантируя, что вы будете платить за оборудование только тогда, когда оно вам необходимо. "
							style={{ maxWidth: 1250 }}
						/>

						<div className="rent-catalog-container">
							{headerLoading ? (
								<Spinner minHeight="15vh" />
							) : (
								<>
									<ArrowHeading
										title="Каталог спецтехники"
										description={
											headerResponse?.count === 0
												? "В настоящее время мы с сожалением вынуждены сообщить, что список спецтехники, предоставляемого в аренду, временно недоступен. Мы активно работаем над обновлением списка и предоставляем наилучшие варианты аренды. Благодарим вас за то, что вы обратились к нам за арендой."
												: ""
										}
										style={{ maxWidth: 885 }}
									/>
									{headerResponse?.count > 0 && !error && (
										<SearchBar
											value={searchQuery}
											onChange={handleChange}
											placeholder="Поиск по технике..."
										/>
									)}
								</>
							)}
							{isLoading ? (
								<Spinner />
							) : error ? (
								<div className="rent-error-wrapper">
									<Error />
								</div>
							) : (
								<motion.div {...containerMotionProps} className="rent-catalog">
									{response?.results?.map(item => (
										<motion.div {...staggerChildrenMotionProps}>
											<RentItem key={item.id} item={item} />
										</motion.div>
									))}
								</motion.div>
							)}
						</div>

						<Pagination pageCount={totalPages} />
					</>
				</div>
			</div>
		</motion.main>
	)
}
