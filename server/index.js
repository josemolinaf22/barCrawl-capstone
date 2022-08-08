require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { SERVER_PORT } = process.env;
const app = express();

const { getCrawls, getAllComments, getBars } = require("./controllerGet");
const { verifyUser, registerUser } = require("./controllerPost");

app.use(express.json());
app.use(cors());

app.get("/api/crawl", getCrawls);
app.get("/api/allComments", getAllComments);
app.get("/api/bars/:id", getBars);
app.post("/api/verifyUser", verifyUser);
app.post("/api/registerUser", registerUser);

app.listen(4006 || SERVER_PORT, () => console.log(`Up on ${SERVER_PORT}`));
