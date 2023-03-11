import { Router } from "express";
import db from "./db";
const router = Router();

router.get("/", (req, res) => {
	res.send("Funding");
});

router.post("/", (req, res) => {
	const {
		name,
		companyName,
		country,
		contactNumber,
		email,
		contribType,
		other,
	} = req.body;

	const query =
		"INSERT INTO funders (name, companyName, country, contactNumber, email, contribType, other) VALUES ($1,$2,$3,$4,$5,$6,$7);";
	try {
		db.query(query, [
			name,
			companyName,
			country,
			contactNumber,
			email,
			contribType,
			other,
		])
			.then(() => res.status(200).send("Funder added!"))
			.catch((error) => {
				res.status(400).send(error);
			});
	} catch (error) {
		res.status(500).send(error);
	}
});
export default router;
