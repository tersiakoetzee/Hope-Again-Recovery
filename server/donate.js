const axios = require("axios");
import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
	const { token, amountInCents, currency } = req.body;
	axios
		.post(
			"https://online.yoco.com/v1/charges/",
			{
				token: token,
				amountInCents: Number(amountInCents),
				currency: currency,
			},
			{
				headers: {
					"X-Auth-Secret-Key": process.env.SECRET_KEY,
				},
			}
		)
		.then(() => {
			// console.log("SUCSESS PAYMENT");
			res.status(200).send("Thank You!");
		})
		.catch((error) => {
			// console.log("FAILURE PAYMENT");
			// console.log(error);
			res.status(400).send(error);
		});
});

export default router;
