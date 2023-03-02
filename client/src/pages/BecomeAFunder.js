import Form from "react-bootstrap/Form";
import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./BecomeAFunder.css";

export const BecomeAFunder = () => {
	return (
		<Template>
			<Container className="formContainer">
				<h2 className="text-center">Become A Funder</h2>
				<Form className="text-center">
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm="2">
							Full Name
						</Form.Label>
						<Col sm="10">
							<Form.Control type="name" placeholder="John Smith" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm="2">
							Company Name
						</Form.Label>
						<Col sm="10">
							<Form.Control type="name" placeholder="Fake Co .PTY" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm="2">
							Country
						</Form.Label>
						<Col sm="10">
							<Form.Control type="name" placeholder="South Africa" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm="2">
							Contact Number
						</Form.Label>
						<Col sm="10">
							<Form.Control type="number" placeholder="081 123 4567" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm="2">
							Email address
						</Form.Label>
						<Col sm="10">
							<Form.Control type="email" placeholder="name@example.com" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3">
						<Form.Label column sm="2">
							Contribution Type:
						</Form.Label>
						<Col sm="10">
							<Form.Select aria-label="Default select example">
								<option>Please Select</option>
								<option value="1">Financial</option>
								<option value="2">Resource</option>
								<option value="3">Time</option>
								<option value="3">Other</option>
							</Form.Select>
						</Col>
					</Form.Group>
					<Form.Group
						as={Row}
						className="mb-3"
						controlId="exampleForm.ControlTextarea1"
					>
						<Form.Label column sm="2">
							Please specify other
						</Form.Label>
						<Col sm="10">
							<Form.Control as="textarea" rows={3} />
						</Col>
					</Form.Group>
					<Button variant="dark" type="submit">
						Submit
					</Button>
				</Form>
			</Container>
		</Template>
	);
};
