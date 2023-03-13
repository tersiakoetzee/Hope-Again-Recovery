import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
					// alert("card successfully tokenized: " + result.id);
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
			{showPopup && (
				<div className="popup text-center p-8">
					<p>Thank you for your Donation!</p>
				</div>
			)}
			<div className="container">
				<Form
					className="text-center py-5"
					onSubmit={handleSubmit}
					style={{
						margin: "100px",
						border: " 2px solid",
						padding: "20px",
						borderRadius: "25px",
					}}
				>
					<Form.Control
						type="number"
						pattern="^[0-9]*[.,]?[0-9]*$"
						min="0"
						step="0.1"
						placeholder="R"
						id="title"
						value={amount}
						className="input"
						onChange={(e) => setAmount(e.target.value)}
					/>
					<Button className="m-3" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</Template>
	);
};
