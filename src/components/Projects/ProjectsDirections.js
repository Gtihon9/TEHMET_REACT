import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import Select from "react-select"
import "./ProjectsDirections.css"
import { Spinner } from "../Spinner/Spinner"
import { DropdownIndicator } from "../Icons/DropdownIndicator"
import useSWR from "swr"
import { fetcher } from "../../api"

const initialDirection = {
	id: "all-projects",
	label: "Все проекты",
	value: null,
}

export const ProjectsDirections = ({ selectedDirection, handleDirectionChange }) => {
	const fetchUrl = "/services/"
	const { data: directions, isLoading, error } = useSWR(fetchUrl, fetcher)

	const allDirections = directions?.results?.map(dir => ({
		id: dir.id,
		value: dir.name,
		label: dir.name,
	}))
	allDirections?.unshift(initialDirection)

	if (isLoading) return <Spinner minHeight={"15vh"} />

	if (error) return null

	return (
		<div className="directions-container">
			<ArrowHeading title="Направления" />

			<div className="directions-links-block">
				{allDirections?.map(direction => (
					<button
						key={direction.id}
						className={`link ${selectedDirection.label === direction.label ? "active" : ""}`}
						onClick={() => handleDirectionChange(direction)}
					>
						<p>{direction.label}</p>
					</button>
				))}
			</div>

			<div className="directions-links-select-mobile">
				<Select
					value={selectedDirection}
					onChange={handleDirectionChange}
					options={allDirections}
					className="directions-select-container"
					classNamePrefix="directions-select"
					components={{
						DropdownIndicator: DropdownIndicator,
					}}
					isSearchable={false}
				/>
			</div>
		</div>
	)
}
