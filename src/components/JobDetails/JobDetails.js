import { Link, useParams } from "react-router-dom"
import LeftArrowSVG from "../Icons/L_Arrow"
import { Button } from "../Button/Button"
import { JobMiniItem } from "./JobMiniItem"
import { useDisclosure } from "../../hooks/useDisclosure"
import { ResponseToVacancy } from "./ResponseToVacancy"
import "./JobDetails.css"
import { motion } from "framer-motion"
import { MobileSwiper } from "../MobileSwiper/MobileSwiper"
import { SwiperSlide } from "swiper/react"
import { useApi } from "../../hooks/useApi"
import { JobsApi } from "../../api/jobs.api"
import { Spinner } from "../Spinner/Spinner"
import { getEmploymentType } from "../../utils/getEmploymentType"
import { getPaymentType } from "../../utils/getPaymentType"
import { containerMotionProps, staggerChildrenMotionProps } from "../../utils/animationProps"

export const JobDetails = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { id } = useParams()

	const { response: jobDetails, loading, error } = useApi(() => JobsApi.getOneJob(id))
	const {
		response: allJobs,
		loading: allJobsLoading,
		error: allError,
	} = useApi(() => JobsApi.getAllJobs(4, 0, ""))

	const filteredAllJobs = allJobs?.results?.filter(job => job.id !== id).slice(0, 3)
	console.log(allJobs)

	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				{loading || allJobsLoading ? (
					<Spinner />
				) : (
					<div className="job-details-content">
						<div className="breadcrumbs">
							<LeftArrowSVG />
							<div className="breadcrumbs-text">
								<Link to="/">Главная</Link>/<Link to="/jobs">Вакансии</Link>/
								<Link to={`/jobs/${jobDetails?.id}`}>{jobDetails?.name}</Link>
							</div>
						</div>

						{error || allError ? (
							<h1>Что-то пошло не так</h1>
						) : (
							<>
								<div className="job-details-heading">
									<h1>{jobDetails?.name}</h1>
									<div className="job-details-heading-info">
										<p>
											Опыт работы: <span>{jobDetails?.work_experience}</span>
										</p>
										<p>
											Занятость: <span>{getEmploymentType(jobDetails?.employment)}</span>
										</p>
									</div>
								</div>

								<div className="job-details-salary">
									<p>Оплата: </p>
									<div>
										<span style={{ fontWeight: "bold" }}>{jobDetails?.payment} ₽</span>
										<span className="job-details-salary-tag">
											{" "}
											/ {getPaymentType(jobDetails?.payment_type)}
										</span>
									</div>
								</div>

								<div className="job-details">
									<div className="job-details-container">
										<div className="job-details-item">
											<h2>Обязанности</h2>
											<p>{jobDetails?.job_responsibilities}</p>
										</div>
										<div className="job-details-item">
											<h2>Требования:</h2>
											<p>{jobDetails?.work_requirements}</p>
										</div>
										<div className="job-details-item">
											<h2>Условия:</h2>
											<p>{jobDetails?.working_conditions}</p>
										</div>

										<div className="job-details-actions">
											<Button onClick={onOpen}>Откликнуться</Button>
											<div className="job-details-actions-date">
												<span>{jobDetails?.updated_at}</span>
											</div>
										</div>
									</div>

									{filteredAllJobs?.length > 0 && (
										<div className="job-details-more">
											<h3>Еще вакансии</h3>
											<motion.div
												{...containerMotionProps}
												className="job-details-more-list"
											>
												{filteredAllJobs?.map(job => (
													<motion.div key={job.id} {...staggerChildrenMotionProps}>
														<JobMiniItem job={job} />
													</motion.div>
												))}
											</motion.div>
											<div className="job-details-more-list-mobile">
												<MobileSwiper>
													{filteredAllJobs?.map(job => (
														<SwiperSlide key={job.id}>
															<JobMiniItem job={job} />
														</SwiperSlide>
													))}
												</MobileSwiper>
											</div>
										</div>
									)}
								</div>
							</>
						)}
					</div>
				)}
			</div>
			<ResponseToVacancy isOpen={isOpen} onClose={onClose} jobName={jobDetails?.name} />
		</motion.main>
	)
}
