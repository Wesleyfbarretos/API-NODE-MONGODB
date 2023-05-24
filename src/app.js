import dotenv from 'dotenv';
import express from 'express';
import { dbSetup } from './infra/database/mongoDB/config/dbConnect.js';
import { booksRouter } from './routes/booksRouter.js';
dotenv.config()

export async function setup() {
	const db = dbSetup();
	db.on("error", console.log.bind(console, 'connection failed'));
	db.once("open", () => {
		console.log("database connection successfully")
	})

	const app = express();

	app.use(express.json());
	app.use("/books", booksRouter);

	return app;
}