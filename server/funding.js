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
			.then(() => res.status(200).json({ msg: "Funder added!" }))
			.catch(() => {
				res
					.status(400)
					.json({ msg: "Could submit entry, fill all required fields" });
			});
	} catch (error) {
		res.status(500).json({ msg: "Error occured. Please check your entries." });
	}
});
export default router;
