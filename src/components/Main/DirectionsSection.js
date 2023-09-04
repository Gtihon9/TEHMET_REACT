import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { DirectionsSlider } from "../DirectionsSlider/DirectionsSlider"
import { Spinner } from "../Spinner/Spinner"
import useSWR from "swr"
import { fetcher } from "../../api"

export const DirectionsSection = () => {
	const fetchUrl = "/services/"
	const { data: services, isLoading, error } = useSWR(fetchUrl, fetcher)

	if (isLoading) return <Spinner minHeight={"15vh"} />

	if (error || services?.results?.length <= 0) return null

	return (
		<div className="section-container">
			<ArrowHeading title="Направления" />
			<DirectionsSlider services={services?.results} />
		</div>
	)
}
