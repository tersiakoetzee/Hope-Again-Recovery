import Form from "react-bootstrap/Form";
import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";

export const BecomeAFunder = () => {
	const [name, setName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [country, setCountry] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [email, setEmail] = useState("");
	const [contribType, setContribType] = useState("");
	const [other, setOther] = useState("");

	const handleSubmit = () => {
		axios.post("/api/funding", {
			name,
			companyName,
			country,
			contactNumber,
			email,
			contribType,
			other,
		});
	};
	return (
		<Template>
			<Container className="formContainer">
				<h2 style={{ textAlign: "center" }}>Become A Funder</h2>
				<Form
					onSubmit={handleSubmit}
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
						<Form.Control
							type="name"
							onChange={(e) => setName(e.target.value)}
							placeholder="John Smith"
						/>
					</Form.Group>
					<Form.Group as={Col} className="mb-3">
						<Form.Label column sm="2">
							Company Name
						</Form.Label>
						<Form.Control
							type="name"
							onChange={(e) => setCompanyName(e.target.value)}
							placeholder="Fake Co .PTY"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Country
						</Form.Label>
						<Form.Control
							type="name"
							onChange={(e) => setCountry(e.target.value)}
							placeholder="South Africa"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Contact Number
						</Form.Label>
						<Form.Control
							type="number"
							onChange={(e) => setContactNumber(e.target.value)}
							placeholder="081 123 4567"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Email address
						</Form.Label>
						<Form.Control
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="name@example.com"
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Contribution Type:
						</Form.Label>
						<Form.Select
							aria-label="Default select example"
							onChange={(e) => setContribType(e.target.value)}
						>
							<option selected disabled>
								Please Select
							</option>
							<option value="Financial">Financial</option>
							<option value="Resource">Resource</option>
							<option value="Time">Time</option>
							<option value="Other">Other</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label column sm="2">
							Please specify other
						</Form.Label>
						<Form.Control
							as="textarea"
							onChange={(e) => setOther(e.target.value)}
							rows={3}
						/>
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
