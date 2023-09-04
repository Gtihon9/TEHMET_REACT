import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import LastProjectsSwiper from "../LastProjectsSwiper/LastProjectsSwiper"
import { Spinner } from "../Spinner/Spinner"
import useSWR from "swr"
import { fetcher } from "../../api"

export const LastProjectsSection = () => {
	const fetchUrl = "/projects/"
	const { data: projects, isLoading, error } = useSWR(fetchUrl, fetcher)

	if (isLoading) return <Spinner minHeight="15vh" />

	if (error || projects?.results?.length === 0) return null

	return (
		<div className="section-container">
			<ArrowHeading title="Наши последние проекты" />
			<LastProjectsSwiper projects={projects?.results} />
		</div>
	)
}
