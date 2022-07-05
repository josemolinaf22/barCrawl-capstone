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
  verifyUser: (req, res) => {
    // console.log(req.body.username);
    sequelize
      .query(
        `
    SELECT * FROM users
    WHERE username = '${req.body.username}'  
    `
      )
      .then((dbRes) => {
        console.log(req.body.password);
        dbRes[0][0].password === req.body.password
          ? res.status(200).send(dbRes[0][0])
          : res.status(403).send("Incorrect password");
      })
      .catch(() => res.status(403).send("incorrect username or password"));
  },
  registerUser: async (req, res) => {
    // console.log(req.body);
    const { username, password } = req.body;
    const checkUsername = await sequelize.query(
      ` SELECT * FROM users WHERE username = '${username}'`
    );
    // console.log("😪 ", checkUsername[1], password);
    if (checkUsername[1].rowCount !== 0) {
      res.status(500).send("Username already exists");
    } else {
      let newUser = await sequelize.query(
        ` INSERT into users(username, password) VALUES('${username}','${password}')`
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
