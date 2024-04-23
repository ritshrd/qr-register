const express = require("express");
const dbconnect = require("./config");

const app = express();

app.listen(3001, () => {
  console.log(`Server is listening on port 3001`);
});

dbconnect();