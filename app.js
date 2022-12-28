const express = require("express");

const app = express();

const res = app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});

app.listen(3003);
module.exports = res;
