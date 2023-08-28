import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import Select from "react-select"
import "./ProjectsDirections.css"
import { useApi } from "../../hooks/useApi"
import { ServicesApi } from "../../api/services.api"
import { Spinner } from "../Spinner/Spinner"
import { DropdownIndicator } from "../Icons/DropdownIndicator"

const initialDirection = {
	id: "all-projects",
	label: "Все проекты",
	value: null,
}

export const ProjectsDirections = ({ selectedDirection, handleDirectionChange }) => {
	const { response: directions, loading, error } = useApi(ServicesApi.getAllServices)

	const allDirections = directions?.results?.map(dir => ({
		id: dir.id,
		value: dir.name,
		label: dir.name,
	}))
	allDirections?.unshift(initialDirection)

	if (loading) return <Spinner minHeight={"15vh"} />

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
