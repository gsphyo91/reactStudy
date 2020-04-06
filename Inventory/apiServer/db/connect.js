// MongoDB 연결 라이브러리
const mongoose = require("mongoose");
const mongoObj = require("../config/mongodb");

//MongoDB 연결
module.exports = () => {
  const db = mongoose.connection;

  db.once("open", () => console.log("connected to MongoDB"));
  db.on("error", err => console.log(`Error on MongoDB Connection: $(err)`));

  mongoose.connect(mongoObj.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  });
};