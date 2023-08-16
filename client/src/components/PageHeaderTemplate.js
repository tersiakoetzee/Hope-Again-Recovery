import { Container, Row, Col, Image } from "react-bootstrap";
import { Heading1 } from "./Heading1";
import "./PageHeaderTemplate.css";

export const PageHeaderTemplate = ({ title, image }) => {
	return (
		<Container fluid>
			<Row>
				<Col className="header-img-container d-flex justify-content-center align-items-center">
					<Image src={image} className="w-100 header-img" responsive />
					<Heading1 className="text-center text-yellow">{title}</Heading1>
				</Col>
			</Row>
		</Container>
	);
};
