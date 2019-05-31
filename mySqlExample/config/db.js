/* eslint-disable no-console */
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

const connect = () => {
  db.connect(err => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      process.exit(1);
    }

    console.log(`DB connected: connection id ${db.threadId}`);
  });
};

module.exports = { db, connect };
