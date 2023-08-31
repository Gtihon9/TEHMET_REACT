import "./Pagination.css"
import RightArrowSvg from "../Icons/R_Arrow"
import LeftArrowSVG from "../Icons/L_Arrow"
import ReactPaginate from "react-paginate"
import { useSearchParams } from "react-router-dom"

export const Pagination = ({ pageCount = 0 }) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const initialPage = parseInt(searchParams.get("page")) - 1 || 0

	const onPageChange = e => {
		const pageNumber = e.selected
		setSearchParams({ page: pageNumber + 1 }, { replace: true })
		window.scrollTo(0, 0)
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
			pageCount={pageCount === 1 ? 0 : pageCount}
			initialPage={initialPage}
			disableInitialCallback
			renderOnZeroPageCount={null}
		/>
	)
}
