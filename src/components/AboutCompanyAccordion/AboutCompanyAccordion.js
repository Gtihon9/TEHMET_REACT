import "./AboutCompanyAccordion.css"
import { accordionData } from "./AboutCompanyAccordion.constants"
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
} from "@chakra-ui/accordion"

export const AboutCompanyAccordion = () => {
	return (
		<Accordion allowToggle className="about-company-accordion-container">
			{accordionData.map(item => (
				<AccordionItem key={item.id} className="about-company-accordion-item">
					<h2>
						<AccordionButton className="about-company-accordion-button">
							<span className="about-company-accordion-title">{item.title}</span>
							<AccordionIcon className="about-company-accordion-icon" />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} className="about-company-accordion-body">
						<p>{item.text1}</p>
						<p>{item.text2}</p>
					</AccordionPanel>
				</AccordionItem>
			))}
		</Accordion>
	)
}
