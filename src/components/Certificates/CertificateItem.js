import "./CertificateItem.css"
import { DownloadIcon } from "../Icons/DownloadIcon"

export const CertificateItem = ({ file, children }) => {
	return (
		<li className="certificate-item">
			<a href={file} target="_blank" rel="noreferrer">
				<button className="certificate-item-button">
					<DownloadIcon />
				</button>
			</a>
			<p className="certificate-item-title">{children}</p>
		</li>
	)
}
