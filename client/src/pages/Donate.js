import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import { Template } from "../components/Template";
import { useState } from "react";
import axios from "axios";
import "./donate.css";

export const Donate = () => {
	const yoco = new window.YocoSDK({
		publicKey: "pk_test_8ba27c1fP4JWwbA33e54",
	});
	const [amount, setAmount] = useState();
	const [showPopup, setShowPopup] = useState(false);
	const currency = "ZAR";
	const handleSubmit = (event) => {
		event.preventDefault();
		yoco.showPopup({
			amountInCents: `${amount * 100}`,
			currency: "ZAR",
			name: "Hope Again Recovery Home",
			description: "Awesome description",
			callback: function (result) {
				// This function returns a token that your server can use to capture a payment
				if (result.error) {
					const errorMessage = result.error.message;
					alert("error occurred: " + errorMessage);
					setShowPopup(false);
				} else {
					setShowPopup(true);
					axios.post("/api/donate", {
						token: result.id,
						amountInCents: amount,
						currency: currency,
					});
				}
			},
		});
	};

	return (
		<Template>
			<Container>
				<Row>
					<Col>
						<h2>Make A Donation</h2>
						<p>
							Your donation will go towards ensuring that we can continue our
							work of substance abuse prevention and provide a safe space
							<br></br> for people to find freedom and become constructive
							citizens of society. Would you consider giving now.
						</p>
					</Col>
				</Row>
				<h2 className="text-center my-5">Donate Now</h2>
				{showPopup && (
					<div className="popup text-center p-8">
						<Modal.Dialog>
							<Modal.Header className="text-center">
								<Modal.Title>Hope Again Recovery Center</Modal.Title>
							</Modal.Header>

							<Modal.Body>
								<p>Thank you for your Donation!</p>
							</Modal.Body>
						</Modal.Dialog>
					</div>
				)}
				<Form
					className="row g-3 needs-validation col-md-8 offset-sm-2 mb-5 px-4 py-4"
					style={{
						border: " 1px solid",
						borderRadius: "25px",
					}}
					onSubmit={handleSubmit}
				>
					<Form.Label>Donation Amount</Form.Label>
					<span className="input-group">
						<InputGroup.Text>R</InputGroup.Text>
						<Form.Control
							type="number"
							pattern="^[0-9]*[.,]?[0-9]*$"
							min="0"
							step="0.1"
							id="title"
							value={amount}
							className="input input-group-text"
							onChange={(e) => setAmount(e.target.value)}
						/>
					</span>
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
