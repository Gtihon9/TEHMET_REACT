import { motion } from "framer-motion"
import "./Certificates.css"
import LeftArrowSVG from "../Icons/L_Arrow"
import { Link } from "react-router-dom"
import { CertificateItem } from "./CertificateItem"
import { Spinner } from "../Spinner/Spinner"
import { Error } from "../Error/Error"
import { getDocumentType } from "../../utils/getDocumentType"
import useSWR from "swr"
import { fetcher } from "../../api"

const Certificates = () => {
	const fetchUrl = "/documents/"
	const { data: documents, isLoading, error } = useSWR(fetchUrl, fetcher)

	const certificates = documents?.results?.filter(item => item.document_type === 1)
	const licences = documents?.results?.filter(item => item.document_type === 2)
	const contracts = documents?.results?.filter(item => item.document_type === 3)

	return (
		<motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<div className="container">
				<div className="certificates-content">
					<div className="breadcrumbs">
						<LeftArrowSVG />
						<div className="breadcrumbs-text">
							<Link to="/">Главная</Link>/
							<Link to="/certificates">Сертификаты и лицензии</Link>
						</div>
					</div>
					<h1 className="certificates-title">Сертификаты и лицензии</h1>
					{isLoading && <Spinner minHeight="50vh" />}
					{error && (
						<div className="certificates-error-wrapper">
							<Error />
						</div>
					)}
					{documents?.count === 0 && !error && (
						<div className="documents-empty-wrapper">
							<h2>
								К сожалению на данный момент спикок документов отсутствует, мы работаем над
								публикацей документов для вас.
							</h2>
						</div>
					)}
					<>
						{certificates?.length > 0 && (
							<div className="certificates-list-wrapper">
								<h2 className="certificates-list-title">{getDocumentType(1)}</h2>
								<ul className="certificates-list">
									{certificates?.map(item => (
										<CertificateItem file={item?.document}>{item?.name}</CertificateItem>
									))}
								</ul>
							</div>
						)}
						{licences?.length > 0 && (
							<div className="certificates-list-wrapper">
								<h2 className="certificates-list-title">{getDocumentType(2)}</h2>
								<ul className="certificates-list">
									{licences?.map(item => (
										<CertificateItem file={item?.document}>{item?.name}</CertificateItem>
									))}
								</ul>
							</div>
						)}
						{contracts?.length > 0 && (
							<div className="certificates-list-wrapper">
								<h2 className="certificates-list-title">{getDocumentType(3)}</h2>
								<ul className="certificates-list">
									{contracts?.map(item => (
										<CertificateItem file={item?.document}>{item?.name}</CertificateItem>
									))}
								</ul>
							</div>
						)}
					</>
				</div>
			</div>
		</motion.main>
	)
}

export default Certificates
