export const getDocumentType = documentTypeId => {
	return documentTypeId === 1 ? "Сертификаты" : documentTypeId === 2 ? "Лицензии" : "Договора"
}
