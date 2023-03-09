import React from "react";
import { useState } from "react";

export const Donate = () => {
	const yoco = new window.YocoSDK({
		publicKey: "pk_test_a0b9ad7eJvg85gO5d1e4",
	});
	const [amount, setAmount] = useState("");
	const handleSubmit = (event) => {
		event.preventDefault();
		yoco.showPopup({
			amountInCents: `${amount}`,
			currency: "ZAR",
			name: "Your Store or Product",
			description: "Awesome description",
			callback: function (result) {
				// This function returns a token that your server can use to capture a payment
				if (result.error) {
					const errorMessage = result.error.message;
					alert("error occurred: " + errorMessage);
				} else {
					alert("card successfully tokenized: " + result.id);
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
