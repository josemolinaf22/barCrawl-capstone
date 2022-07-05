require("dotenv").config();
const Sequelize = require("sequelize");

const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getCrawls: async (req, res) => {
    await sequelize
      .query(
        `
    SELECT * 
    FROM crawl;
    `
      )

      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("backend getCrawl error", err));
  },

  getBars: async (req, res) => {
    const { id } = req.params;
    await sequelize
      .query(
        `
    SELECT * 
    FROM bars 
    WHERE crawl_id = ${id};
    `
      )

      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("backend getBars error", err));
  },

  getAllComments: (req, res) => {
    sequelize
      .query(
        `
    SELECT * FROM comments
    `
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log("backend getAll comments", err));
  },
};
