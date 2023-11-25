const mongoose = require("mongoose");

const connectionString = "";

const conectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = conectDB;
