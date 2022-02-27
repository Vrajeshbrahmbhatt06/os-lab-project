const express = require("express");
const cors = require("cors");

// import routes
const homeRouter = require("./routes/index");
const processesRouter = require("./routes/processes");
const createRouter = require("./routes/createProcess");
const deleteRouter = require("./routes/deleteProcess");

// init app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// REST endpoints
app.use("/", homeRouter);
app.use("/processes", processesRouter);
app.use("/create", createRouter);
app.use("/delete", deleteRouter);

module.exports = app;