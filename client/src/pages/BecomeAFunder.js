import Form from "react-bootstrap/Form";
import { Template } from "../components/Template";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState } from "react";
import { FundingConfirmation } from "../components/FundingConfirmation";

export const BecomeAFunder = () => {
	const [name, setName] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [country, setCountry] = useState("");
	const [contactNumber, setContactNumber] = useState("");
	const [email, setEmail] = useState("");
	const [contribType, setContribType] = useState("");
	const [other, setOther] = useState("");
	const [validated, setValidated] = useState(false);
	const [confirmation, setConfirmation] = useState(false);
	const [openConfirmation, setOpenConfirmation] = useState(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;

		setValidated(true);
		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			axios
				.post("/api/funding", {
					name,
					companyName,
					country,
					contactNumber,
					email,
					contribType,
					other,
				})
				.then(() => {
					setConfirmation(true);
					setOpenConfirmation(true);
				})
				.catch(() => {
					setOpenConfirmation(true);
					setConfirmation(false);
				});
		}
	};
	return (
		<Template>
			<Container className="formContainer">
				<h2 className="text-center my-5">Become A Funder</h2>
				<Form
					className="row g-3 needs-validation col-md-8 offset-sm-2 mb-5 px-4 py-4"
					noValidate
					validated={validated}
					onSubmit={handleSubmit}
					style={{
						border: " 1px solid",
						borderRadius: "25px",
					}}
				>
					<p style={{ color: "grey" }}>*Required fields</p>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Full Name*
						</Form.Label>
						<Form.Control
							type="text"
							pattern="^[a-zA-Z ]*$"
							onChange={(e) => setName(e.target.value)}
							placeholder="John Smith"
							required
						/>
					</Form.Group>
					<Form.Group as={Col} className="mb-3">
						<Form.Label>Company Name*</Form.Label>
						<Form.Control
							type="text"
							pattern="^[a-zA-Z ]*$"
							onChange={(e) => setCompanyName(e.target.value)}
							placeholder="Fake Co .PTY"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Country*
						</Form.Label>
						<Form.Control
							type="text"
							pattern="^[a-zA-Z ]*$"
							onChange={(e) => setCountry(e.target.value)}
							placeholder="South Africa"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Contact Number*</Form.Label>
						<Form.Control
							minLength="10"
							maxLength="10 "
							type="text"
							pattern="0[0-9]{9}"
							onChange={(e) => setContactNumber(e.target.value)}
							placeholder="081 123 4567"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label column sm="2">
							Email address*
						</Form.Label>
						<Form.Control
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="name@example.com"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Contribution Type:*</Form.Label>
						<Form.Select
							aria-label="Default select example"
							onChange={(e) => setContribType(e.target.value)}
							required
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
						<Form.Label>Please specify other</Form.Label>
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
					{openConfirmation && (
						<FundingConfirmation
							companyName={companyName}
							country={country}
							contactNumber={contactNumber}
							name={name}
							confirmation={confirmation}
							closeConfirmation={() => setOpenConfirmation(false)}
						/>
					)}
				</Form>
			</Container>
		</Template>
	);
};
