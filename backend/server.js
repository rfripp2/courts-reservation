const express = require("express");
const routes = require("./src/api/routes");

const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

// Parse JSON request body
app.use(express.json());

// Attach Prisma client to the request object
app.use((req, res, next) => {
	req.prisma = prisma;
	next();
});

// Register routes
app.use("/routes", clubs);

// Start the server
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
