import { $instance } from "./index"

export const CertificatesApi = {
	getAllCertificates: () => $instance.get("/documents/"),
}
