import { ListGroup } from "react-bootstrap";

export const AdmissionItem = ({ color, text }) => {
	return (
		<ListGroup.Item className="border-0 d-flex">
			<i className={`bi bi-circle-fill mx-1 ${color}`}></i>
			<p className="mb-0">{text}</p>
		</ListGroup.Item>
	);
};
