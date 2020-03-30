const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/signIn', (req, res) => {
  console.log(req.body);
  res.status(200).send("200");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
