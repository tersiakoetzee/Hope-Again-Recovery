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
	};

	// Optional
	const { email, postCode, whichOne } = req.body;

	// Screening questions
	let question1 = `Have you previously been to a treatment centre?[${answer1}]`;
	const question2 = `Do you acknowledge that Hope Again Recovery Home requires that you have an assigned care-giver on your recovery journey?[${answer2}]`;

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
			description: `${phoneNumber}\n${email}\n${question1}\n${question2}`,
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

/*************************** start of get calendar events/dates */

// Reading data / booked events lists from Google API
router.get("/", async (req, res) => {
	//testing api
	res.send("You are listening on api bookings GET");
	// eslint-disable-next-line no-console
	console.log("Listening on api bookings get");

	// Set credentials - if not needed uncomment
	oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

	const results = await calendar.events.list({
		calendarId: "primary",
		auth: oauth2Client,
		timeMin: new Date().toISOString(),
		maxResults: 10, //extract the next ten events
		singleEvents: true,
		orderBy: "startTime",
	});

	const events = results.data.items;
	if (!events || events.length === 0) {
		// eslint-disable-next-line no-console
		console.log("No upcoming events found.");
		return;
	}
	// eslint-disable-next-line no-console
	console.log("Upcoming 10 events:");
	events.map((event) => {
		const start = event.start.dateTime || event.start.date;
		// eslint-disable-next-line no-console
		console.log(`${start} - ${event.summary}`);
	});

	//authorize().then(listEvents).catch(console.error);
	//GET https://www.googleapis.com/calendar/v3/calendars/primary/events/eventId
});

//*************************** end of get calendar events/dates */

export default router;
