import { ListGroup } from "react-bootstrap";
import { Paragraph } from "./Paragraph";

export const AdmissionItem = ({ color, text }) => {
	return (
		<ListGroup.Item className="border-0 d-flex">
			<i className={`bi bi-circle-fill mx-1 ${color}`}></i>
			<Paragraph className="mb-0">{text}</Paragraph>
		</ListGroup.Item>
	);
};
