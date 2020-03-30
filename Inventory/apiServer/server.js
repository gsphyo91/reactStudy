const express = require("express");

const app = express();
const port = 3001;

app.post('/signIn', (req, res) => {
  console.log(req);
  res.status(200).send("200");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
