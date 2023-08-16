import { Router } from "express";
import { google } from "googleapis";
import { JWT } from "google-auth-library";
import logger from "./utils/logger";
import dayjs from "dayjs";
import { validationResult } from "express-validator";
import { validation } from "./bookingValidate";

const router = Router();

router.post("/", validation, async (req, res) => {
	logger.debug("Book a screening");

	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

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
	let question1 = `1. Have you previously been to a treatment centre? (${answer1})`;
	const question2 = `2. Do you acknowledge that Hope Again Recovery Home requires that you have an assigned care-giver on your recovery journey? (${answer2})`;
	let careGiverLocation = `Location: ${careGiverAddress1} ${careGiverAddress2} ${careGiverCity} ${careGiverCountry} ${careGiverPostCode}`;

	if (whichOne && answer1.toLowerCase() == "yes") {
		question1 += ` If so, which one? (${whichOne})`;
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

	let bookingDetails = {
		summary: `${name} ${surname}\n${age}`,
		description: `${phoneNumber}\n${email}\n\n${question1}\n${question2}\n\nCare-Giver Information:\n\tName: ${careGiverName}\n\tNumber: ${careGiverNumber}\n\t${careGiverLocation}`,
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
	};

	// Make a booking
	const createBooking = async (booking) => {
		// create client that we can use to communicate with Google
		const client = new JWT({
			email: process.env.CLIENT_EMAIL,
			key: process.env.PRIVATE_KEY,
			scopes: [
				// set the right scope
				"https://www.googleapis.com/auth/calendar",
				"https://www.googleapis.com/auth/calendar.events",
			],
		});

		// Extract google calender api
		const calendar = google.calendar({ version: "v3" });

		// Request to Google Calendar API.
		try {
			await calendar.events.insert({
				calendarId: process.env.CALENDAR_ID,
				auth: client,
				requestBody: booking,
			});

			res.status(200).json({ msg: "Booking successful" });
		} catch (error) {
			res.status(500).json({ msg: "Could not make a booking, try again" });
		}
	};

	createBooking(bookingDetails);
});

/* start of get calendar events/dates */

// Reading data / booked events lists from Google API
router.get("/", async (req, res) => {
	async function listEvents() {
		const client = new JWT({
			email: process.env.CLIENT_EMAIL,
			key: process.env.PRIVATE_KEY,
			scopes: [
				// set the right scope
				"https://www.googleapis.com/auth/calendar",
				"https://www.googleapis.com/auth/calendar.events",
			],
		});
		const calendar = google.calendar({ version: "v3" });
		try {
			const results = await calendar.events.list({
				calendarId: process.env.CALENDAR_ID,
				auth: client,
				singleEvents: true,
				orderBy: "startTime",
			});
			// Returning bookings list
			const events = results.data.items.map((event) => event.start.dateTime);
			res.status(200).json(events);
		} catch (error) {
			res
				.status(500)
				.json({ msg: "Could not return bookings list, try again" });
		}
	}

	listEvents();
});

//*end of get calendar events/dates */

export default router;
