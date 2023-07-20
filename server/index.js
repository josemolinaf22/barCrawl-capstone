const { PORT } = process.env || 4000;
const express = require("express");

const app = express();

const cors = require("cors");
const path = require("path");

require("dotenv").config();

const { getCrawls, getAllComments, getBars } = require("./controllerGet");
const { verifyUser, registerUser } = require("./controllerPost");
//Middleware
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

//Endpoints
app.get("/api/crawl", getCrawls);
app.get("/api/allComments", getAllComments);
app.get("/api/bars/:id", getBars);
app.post("/api/verifyUser", verifyUser);
app.post("/api/registerUser", registerUser);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(PORT || 4000, () => console.log(`Server running on ${PORT}`));
