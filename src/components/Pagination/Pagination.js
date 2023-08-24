import "./Pagination.css"
import RightArrowSvg from "../Icons/R_Arrow"
import LeftArrowSVG from "../Icons/L_Arrow"
import ReactPaginate from "react-paginate"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export const Pagination = ({ pageCount = 1 }) => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: 1,
	})
	const page = parseInt(searchParams.get("page")) - 1 || 0

	const onPageChange = e => {
		const pageNumber = e.selected
		setSearchParams({ page: pageNumber + 1 }, { replace: true })
	}

	useEffect(() => {
		setSearchParams({ page: 1 })
	}, [])

	return (
		<ReactPaginate
			breakLabel="..."
			nextLabel={<RightArrowSvg />}
			previousLabel={<LeftArrowSVG />}
			containerClassName="react-pagination"
			nextClassName="react-pagination-next-button"
			previousClassName="react-pagination-prev-button"
			pageClassName="react-pagination-page"
			onPageChange={onPageChange}
			pageRangeDisplayed={3}
			pageCount={pageCount === 1 ? 0 : pageCount}
			initialPage={page}
			disableInitialCallback
			renderOnZeroPageCount={null}
		/>
	)
}
