import "./SearchBar.css"
import { SearchIcon } from "../Icons/SearchIcon"

export const SearchBar = ({ value, onChange, placeholder }) => {
	return (
		<div className="search-wrapper">
			<input
				className="search-input"
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			/>
			<span className="search-icon">
				<SearchIcon />
			</span>
		</div>
	)
}
