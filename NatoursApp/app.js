const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoutes");

const app = express();

// middleware

// routes

app.use("api/v1/tours ", tourRouter);

module.exports = app;
