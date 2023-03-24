import { ListGroup } from "react-bootstrap";
import { Paragraph } from "./Paragraph";

export const AdmissionItem = ({ color, text }) => {
	return (
		<ListGroup.Item className="border-0 d-flex px-0">
			<i className={`bi bi-circle-fill ai-icon mx-1 mt-2 me-2 ${color}`}></i>
			<Paragraph className="mb-0">{text}</Paragraph>
		</ListGroup.Item>
	);
};
