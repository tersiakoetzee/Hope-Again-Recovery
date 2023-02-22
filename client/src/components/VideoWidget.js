import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export const VideoWidget = () => {
	return (
		<Container>
			<Row>
				<Col className="col-md-6 col-sm-6">
					<Card>
						<Card.Body>
							<Card.Title> </Card.Title>
							<div className="ratio ratio-16x9">
								<iframe
									src="https://www.youtube.com/embed/2WJhax7Jmxs"
									title="YouTube video"
									allowfullscreen
								></iframe>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};