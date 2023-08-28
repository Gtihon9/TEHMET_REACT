import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import { DirectionsSlider } from "../DirectionsSlider/DirectionsSlider"
import { useApi } from "../../hooks/useApi"
import { ServicesApi } from "../../api/services.api"
import { Spinner } from "../Spinner/Spinner"

export const DirectionsSection = () => {
	const { response: services, error, loading } = useApi(ServicesApi.getAllServices)

	if (loading) return <Spinner minHeight={"15vh"} />

	if (error || services?.results?.length <= 0) return null

	return (
		<div className="section-container">
			<ArrowHeading title="Направления" />
			<DirectionsSlider services={services?.results} />
		</div>
	)
}
