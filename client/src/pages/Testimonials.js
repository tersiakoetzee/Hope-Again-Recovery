
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Template } from "../components/Template";

export const Testimonials = () => {
	return (
		<Template>
			<Container>
				<Row>
					<Col>
						<Card> 1 of 2</Card>
					</Col>
					<Col>2 of 2</Col>
				</Row>
				<Row>
					<Col>1 of 3</Col>
					<Col>2 of 3</Col>
					<Col>3 of 3</Col>
				</Row>
			</Container>
		</Template>
	);
};
