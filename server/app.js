import dotenv from "dotenv";
import express from "express";

import apiRouter from "./api";
import bookingRouter from "./booking";
import config from "./utils/config";
import {
	clientRouter,
	configuredHelmet,
	configuredMorgan,
	httpsOnly,
	logErrors,
} from "./utils/middleware";

const apiRoot = "/api";
const bookingRoot = "/api/booking";

dotenv.config();

const app = express();

app.use(express.json());
app.use(configuredHelmet());
app.use(configuredMorgan());

if (config.production) {
	app.enable("trust proxy");
	app.use(httpsOnly());
}

app.use(apiRoot, apiRouter);
app.use(bookingRoot, bookingRouter);
app.use("/health", (_, res) => res.sendStatus(200));
app.use(clientRouter(apiRoot));
app.use(clientRouter(bookingRoot));

app.use(logErrors());

export default app;
