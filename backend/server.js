require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.listen(port, () => {
	prisma
		.$connect()
		.then(() => {
			console.log("Connected to the database");
		})
		.catch((error) => {
			console.error("Error connecting to the database:", error);
		});

	console.log(`Server is running on port ${port}`);
});
