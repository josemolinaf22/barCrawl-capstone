const express = require("express");
const cors = require("cors");
const PORT = 4000;
const sequelize = require("./sequelize");
const app = express();

app.use(express.json());
app.use(cors());

//endpoint
app.get("/api/getAllComments", async (req, res) => {
  let allComments = await sequelize.query(`
        SELECT * FROM comments
    `);
  res.status(200).send(allComments[0]);
});

app.listen(PORT, () => {
  console.log(`server is up on port ${PORT}`);
});
