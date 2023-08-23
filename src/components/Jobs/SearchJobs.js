import { SearchIcon } from "../Icons/SearchIcon"
import "./SearchJobs.css"

export const SearchJobs = ({ value, onChange }) => {
	return (
		<div className="jobs-search-wrapper">
			<input
				className="jobs-search-input"
				onChange={onChange}
				value={value}
				placeholder="Поиск по вакансиям..."
			/>
			<span className="jobs-search-icon">
				<SearchIcon />
			</span>
		</div>
	)
}
