const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const Connection = require("./database/db.js");
const router = require("./routes/Route.js");
const cors = require("cors");
const bodyParser = require("body-parser");

// Server
const app = express();

// Dotenv Configuration
dotenv.config();

// Handling Post API's Using Parser
app.use(bodyParser.json({ extended: true }));

// URL decode
app.use(bodyParser.urlencoded({ extended: true }));

// Enabling the Cors
app.use(cors());

// Routes
app.use("/", router);

// MongoDB Connection
Connection();

// Port
const PORT = process.env.PORT || 8080;

// Server Listen
app.listen(PORT, () => {
  console.log(`The server is runnig successfully on port ${PORT}`.bgWhite);
});
