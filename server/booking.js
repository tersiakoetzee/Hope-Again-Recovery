import { Router } from "express";
import { google } from "googleapis";

import logger from "./utils/logger";
import dayjs from "dayjs";

const router = Router();

const oauth2Client = new google.auth.OAuth2(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	process.env.REDIRECT_URL
);

// Extract google calender api
const calendar = google.calendar({
	version: "v3",
	auth: process.env.AUTH_KEY,
});

router.post("/", async (req, res) => {
	logger.debug("Book a screening");

	// Required
	const {
		name,
		surname,
		age,
		phoneNumber,
		addressLine1,
		addressLine2,
		city,
		country,
		dateTime,
		answer1,
		answer2,
		careGiverName,
		careGiverNumber,
	} = req.body;
	const required = {
		name,
		surname,
		age,
		phoneNumber,
		addressLine1,
		addressLine2,
		city,
		country,
		dateTime,
		answer1,
		answer2,
		careGiverName,
		careGiverNumber,
	};
	// Optional
	const {
		email,
		postCode,
		whichOne,
		careGiverAddress1,
		careGiverAddress2,
		careGiverCity,
		careGiverCountry,
		careGiverPostCode,
	} = req.body;

	// Screening questions
	let question1 = `Have you previously been to a treatment centre?[${answer1}]`;
	const question2 = `Do you acknowledge that Hope Again Recovery Home requires that you have an assigned care-giver on your recovery journey?[${answer2}]`;
	let careGiverLocation = ` Care-Giver Location:\n${careGiverAddress1}\n${careGiverAddress2}\n${careGiverCity}\n${careGiverCountry}\n${careGiverPostCode}\n`;
	if (whichOne && answer1.toLowerCase() == "yes") {
		question1 += ` If so, which one?[${whichOne}]`;
	}
	if (![3, 4].includes(new Date(dateTime).getDay())) {
		return res.status(500).json({
			msg: "You can only make a booking for Wednesday or Thursday",
		});
	}

	if (!Object.values(required).every((v) => v)) {
		return res.status(500).json({
			msg: "Could not make a booking, fill all required fields",
		});
	}
	// Set credentials
	oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

	// Make a booking
	await calendar.events.insert({
		calendarId: "primary",
		auth: oauth2Client,
		requestBody: {
			summary: `${name} ${surname}\n${age}`,
			description: `${phoneNumber}\n${email}\n${question1}\n${question2}\n Care-Giver Information:\n Care-Giver Name:${careGiverName}\n Care-Giver Number:${careGiverNumber}\n${careGiverLocation}`,
			start: {
				dateTime: new Date(dateTime),
				timeZone: "Africa/Johannesburg",
			},
			end: {
				dateTime: dayjs(new Date(dateTime)).add(1, "hour").toISOString(),
				timeZone: "Africa/Johannesburg",
			},
			location: `${addressLine1}\n${addressLine2}\n${city}\n${country}\n${postCode}\n`,
			colorId: 7,
		},
	});

	res.status(200).json({ msg: "Booking successful" });
});

export default router;
