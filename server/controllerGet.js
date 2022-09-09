require("dotenv").config();
const Sequelize = require("sequelize");

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

client.query(
  "SELECT table_schema,table_name FROM information_schema.tables;",
  (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  }
);

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
