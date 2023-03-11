import React from "react";
import { useState } from "react";
import axios from "axios";

export const Donate = () => {
	const yoco = new window.YocoSDK({
		publicKey: "pk_test_8ba27c1fP4JWwbA33e54",
	});
	const [amount, setAmount] = useState("");
	const currency = "ZAR";
	const handleSubmit = (event) => {
		event.preventDefault();
		yoco.showPopup({
			amountInCents: `${amount}`,
			currency: "ZAR",
			name: "Hope Again Recovery Home",
			description: "Awesome description",
			callback: function (result) {
				// This function returns a token that your server can use to capture a payment
				if (result.error) {
					const errorMessage = result.error.message;
					alert("error occurred: " + errorMessage);
				} else {
					alert("card successfully tokenized: " + result.id);
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
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				id="title"
				value={amount}
				className="input"
				onChange={(e) => setAmount(e.target.value)}
			></input>
			<button type="submit">Pay</button>
		</form>
	);
};
