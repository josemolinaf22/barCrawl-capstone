require("dotenv").config();
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

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
  connectionString: DATABASE_URL,
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
  verifyUser: (req, res) => {
    sequelize
      .query(
        `
    SELECT * FROM users
    WHERE username = '${req.body.username}'  
    `
      )

      .then((dbRes) => {
        bcrypt.compareSync(req.body.password, dbRes[0][0].password)
          ? res.status(200).send(dbRes[0][0])
          : res.status(403).send("Incorrect password");
      })
      .catch((err) =>
        res.status(403).send("incorrect username or password", err)
      );
  },
  registerUser: async (req, res) => {
    const { username, password } = req.body;
    const checkUsername = await sequelize.query(
      ` SELECT * FROM users WHERE username = '${username}'`
    );

    if (checkUsername[1].rowCount !== 0) {
      console.log(checkUsername[1].rowCount);
      res.status(500).send("Username already exists");
    } else {
      const salt = bcrypt.genSaltSync(5);
      const passwordHash = bcrypt.hashSync(password, salt);

      let newUser = await sequelize.query(
        ` INSERT into users(username, password) VALUES('${username}','${passwordHash}')`
      );
      const userInfo = await sequelize.query(
        `SELECT user_id, username FROM users WHERE username = '${username}'`
      );
      if (newUser) {
        return res.status(200).send(userInfo);
      } else {
        return res.status(500).send("unsuccessful");
      }
    }
  },
};
