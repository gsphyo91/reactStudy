const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
  id: Number,
  email: String,
  password: String
})

module.exports = mongoose.model("userInfo", userInfoSchema);