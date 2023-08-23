import "./Pagination.css"
import RightArrowSvg from "../Icons/R_Arrow"
import LeftArrowSVG from "../Icons/L_Arrow"
import ReactPaginate from "react-paginate"
import { useSearchParams } from "react-router-dom"

export const Pagination = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const page = parseInt(searchParams.get("page")) - 1 || 0

	const onPageChange = e => {
		const pageNumber = e.selected
		if (pageNumber === 0) {
			setSearchParams({}, { replace: true })
		} else {
			setSearchParams({ page: pageNumber + 1 }, { replace: true })
		}
	}

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
			pageCount={12}
			initialPage={page}
			disableInitialCallback
			renderOnZeroPageCount={null}
		/>
	)
}
