import { Router } from "express";
import { google } from "googleapis";

//Calender Event List data ******
const fs = require("fs").promises;
const path = require("path");
const process = require("process");
const { authenticate } = require("@google-cloud/local-auth");
//************************************

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

/*************************** start of get calendar events/dates */

// Reading data / booked events lists from Google API
router.get("/", async (req, res) => {
	//testing api
	res.send("You are listening on api bookings GET");
	// eslint-disable-next-line no-console
	console.log("Listening on api bookings get");

	// Set credentials - if not needed uncomment
	oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

	// If modifying these scopes, delete token.json.
	const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
	// The file token.json stores the user's access and refresh tokens, and is
	// created automatically when the authorization flow completes for the first
	// time.
	const TOKEN_PATH = path.join(process.cwd(), "token.json");
	const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

	/**
	 * Reads previously authorized credentials from the save file.
	 *
	 * @return {Promise<OAuth2Client|null>}
	 */
	async function loadSavedCredentialsIfExist() {
		try {
			const content = await fs.readFile(TOKEN_PATH);
			const credentials = JSON.parse(content);
			return google.auth.fromJSON(credentials);
		} catch (err) {
			return null;
		}
	}

	/**
	 * Serializes credentials to a file compatible with GoogleAUth.fromJSON.
	 *
	 * @param {OAuth2Client} client
	 * @return {Promise<void>}
	 */
	async function saveCredentials(client) {
		const content = await fs.readFile(CREDENTIALS_PATH);
		const keys = JSON.parse(content);
		const key = keys.installed || keys.web;
		const payload = JSON.stringify({
			type: "authorized_user",
			client_id: key.client_id,
			client_secret: key.client_secret,
			refresh_token: client.credentials.refresh_token,
		});
		await fs.writeFile(TOKEN_PATH, payload);
	}

	/**
	 * Load or request or authorization to call APIs.
	 *
	 */
	async function authorize() {
		let client = await loadSavedCredentialsIfExist();
		if (client) {
			return client;
		}
		client = await authenticate({
			scopes: SCOPES,
			keyfilePath: CREDENTIALS_PATH,
		});
		if (client.credentials) {
			await saveCredentials(client);
		}
		return client;
	}

	/**
	 * Lists the next 10 events on the user's primary calendar.
	 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
	 */
	async function listEvents(auth) {
		const calendar = google.calendar({ version: "v3", auth });
		const results = await calendar.events.list({
			calendarId: "primary",
			timeMin: new Date().toISOString(),
			maxResults: 10,
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
	}
	// eslint-disable-next-line no-console
	authorize().then(listEvents).catch(console.error);
	//GET https://www.googleapis.com/calendar/v3/calendars/primary/events/eventId
});

//*************************** end of get calendar events/dates */

export default router;
