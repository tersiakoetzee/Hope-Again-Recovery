import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./FundingPartners.css";

export const FundingPartners = () => {
	return (
		<Template>
			<Container className="partners text-center">
				<Row className="">
					<Col>
						<h2>Funding Partners</h2>
						<h6>Funding Partners:</h6>
						<p>
							Thank you to our current funding and resource partners:<br></br>
							Department of Social Development<br></br>
							Mount Hope Church<br></br>
							Food Forward<br></br>
							Pick n Pay Constantia
						</p>
					</Col>
				</Row>
			</Container>
		</Template>
	);
};
