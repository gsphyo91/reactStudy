const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const jwt = require("jsonwebtoken");
const secretObj = require("./config/jwt");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/auth", (req, res) => {
  const token = req.headers.token;
  console.log("token: " + token);
  try{
    const verify = jwt.verify(token, secretObj.secret);
    if (verify) {
      res.sendStatus(200);
    } 
  }catch(err){
    res.sendStatus(401);
  }
});

app.post("/signIn", (req, res) => {
  const decodePassword = Buffer.from(
    req.body.headers.password,
    "base64"
  ).toString("utf8");
  const token = jwt.sign(
    {
      email: req.body.headers.email,
      password: decodePassword
    },
    secretObj.secret,
    {
      expiresIn: "1m"
    }
  );
  console.log("token: " + token);
  res.status(200).send(token);
});

// react-blog-1

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
