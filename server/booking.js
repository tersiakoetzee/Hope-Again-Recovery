import { Router } from "express";
import logger from "./utils/logger";
import { google } from "googleapis";
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

router.get("/", async (req, res) => {
    logger.debug("Book a screening");

    // Required
    const { name, surname, dateTime } = req.body;
    // Optional
    const { phoneNumber, email, addressLine1, addressLine2, city, country, postCode } = req.body;

    // Set credentials
    oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

    // Make a booking
    await calendar.events.insert({
        calendarId: "primary",
        auth: oauth2Client,
        requestBody: {
            summary: `${name} ${surname}`,
            description: `${phoneNumber}\n${email}`,
            start: {
                dateTime: new Date(dateTime),
                timeZone: "Africa/Johannesburg",
            },
            end: {
                dateTime: dayjs(new Date()).add(1, "day").add(1, "hour").toISOString(),
                timeZone: "Africa/Johannesburg",
            },
            location: `${addressLine1}\n${addressLine2}\n${city}\n${country}\n${postCode}\n`,
            colorId: 7,
        },
    });

    res.json({ msg: "Booking successful" });

});

export default router;


