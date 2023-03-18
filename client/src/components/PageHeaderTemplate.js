import { Container, Row, Col, Image } from "react-bootstrap";
import "./PageHeaderTemplate.css";

export const PageHeaderTemplate = ({ title, image }) => {
	return (
		<Container>
			<Row>
				<Col className="header-img-container d-flex justify-content-center align-items-center">
					<Image src={image} className="w-100 header-img" responsive />
					<h1 className="text-center">{title} |</h1>
				</Col>
			</Row>
		</Container>
	);
};
