import Form from "react-bootstrap/Form";
import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const BecomeAFunder = () => {
	return (
		<Template>
			<Container className="formContainer">
				<h2 style={{ textAlign: "center" }}>Become A Funder</h2>
				<Form
					style={{
						margin: "100px",
						border: " 1px solid",
						padding: "20px",
						borderRadius: "25px",
					}}
				>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Full Name
						</Form.Label>
						<Form.Control type="name" placeholder="John Smith" />
					</Form.Group>
					<Form.Group as={Col} className="mb-3">
						<Form.Label column sm="2">
							Company Name
						</Form.Label>
						<Form.Control type="name" placeholder="Fake Co .PTY" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Country
						</Form.Label>
						<Form.Control type="name" placeholder="South Africa" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Contact Number
						</Form.Label>
						<Form.Control type="number" placeholder="081 123 4567" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Email address
						</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Contribution Type:
						</Form.Label>
						<Form.Select aria-label="Default select example">
							<option>Please Select</option>
							<option value="1">Financial</option>
							<option value="2">Resource</option>
							<option value="3">Time</option>
							<option value="3">Other</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label column sm="2">
							Please specify other
						</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
					<Button
						variant="primary"
						className="btn btn-success text-light text-center"
						type="submit"
					>
						Submit
					</Button>
				</Form>
			</Container>
		</Template>
	);
};
