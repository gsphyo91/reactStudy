const express = require("express");
// CORS 이슈 해결 라이브러리
const cors = require("cors");
// Request Body 파싱 라이브러리
const bodyParser = require("body-parser");
// JWT 발급, 검증 라이브러리
const jwt = require("jsonwebtoken");
const secretObj = require("./config/jwt");

const mongoConnect = require("./db/connect");

mongoConnect();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const blogUserRouter = require("./routers/blog/user");
app.use('/blog/user', blogUserRouter);


app.get("/auth", (req, res) => {
  const token = req.headers.token;
  console.log("token: " + token);
  try {
    const verify = jwt.verify(token, secretObj.secret);
    if (verify) {
      res.sendStatus(200);
    }
  } catch (err) {
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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
