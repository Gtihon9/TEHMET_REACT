import { ArrowHeading } from "../ArrowHeading/ArrowHeading"
import LastProjectsSwiper from "../LastProjectsSwiper/LastProjectsSwiper"
import { useApi } from "../../hooks/useApi"
import { ProjectsApi } from "../../api/projects.api"
import { Spinner } from "../Spinner/Spinner"

export const LastProjectsSection = () => {
	const { response: projects, loading, error } = useApi(ProjectsApi.getAllProjects)

	if (loading) return <Spinner minHeight="15vh" />

	if (error || projects?.results?.length === 0) return null

	return (
		<div className="section-container">
			<ArrowHeading title="Наши последние проекты" />
			<LastProjectsSwiper projects={projects?.results} />
		</div>
	)
}
