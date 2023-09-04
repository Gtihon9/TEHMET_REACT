import { Link, useSearchParams } from "react-router-dom"
import { SectionHeading } from "../SectionHeading/SectionHeading"
import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { RentItem } from "./RentItem"
import { motion } from "framer-motion"
import "./Rent.css"
import LeftArrowSVG from "../Icons/L_Arrow"
import { Pagination } from "../Pagination/Pagination"
import { useState } from "react"
import { getTotalPages } from "../../utils/getTotalPages"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"
import { useDebounce } from "../../hooks/useDebounce"
import { SearchBar } from "../SearchBar/SearchBar"
import useSWR from "swr"
import { EmptyState } from "../EmptyState/EmptyState"
import { fetcher } from "../../api"

export const Rent = () => {
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
			? `/equipments/?limit=${limit}&offset=${offset}`
			: `/equipments/?limit=${limit}&offset=${offset}&name=${equipmentName}`

	const { data: equipments, isLoading, error } = useSWR(fetchUrl, fetcher)

	const totalPages = getTotalPages(equipments?.count, limit)

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
							<ArrowHeading
								title="Каталог спецтехники"
								description={
									equipments?.count === 0 && !isLoading && debouncedQuery.length === 0
										? "В настоящее время мы с сожалением вынуждены сообщить, что список спецтехники, предоставляемого в аренду, временно недоступен. Мы активно работаем над обновлением списка и предоставляем наилучшие варианты аренды. Благодарим вас за то, что вы обратились к нам за арендой."
										: ""
								}
								style={{ maxWidth: 884 }}
							/>
							<SearchBar
								value={searchQuery}
								onChange={handleChange}
								placeholder="Поиск по технике..."
							/>
							{isLoading && <Spinner minHeight="50vh" />}
							{error && (
								<div className="rent-error-wrapper">
									<Error />
								</div>
							)}
							{equipments?.count === 0 && debouncedQuery.length > 0 && !error && (
								<div className="rent-empty-wrapper">
									<EmptyState />
								</div>
							)}
							<motion.div {...containerMotionProps} className="rent-catalog">
								{equipments?.results?.map(item => (
									<motion.div key={item.id} {...staggerChildrenMotionProps}>
										<RentItem item={item} />
									</motion.div>
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
