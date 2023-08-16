const axios = require("axios");
import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
	const { token, amountInCents, currency } = req.body;
	try {
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
				res.status(200).send("Thank You!");
			})
			.catch((error) => {
				res.status(400).send(error);
			});
	} catch (error) {
		res.status(500).send(error);
	}
});

export default router;
