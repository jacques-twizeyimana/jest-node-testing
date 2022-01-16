const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const config = require("config");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

if (!config.get("jwtPrivateKey")) {
  console.log("JWT PRIVATE KEY IS NOT DEFINED");
  process.exit(1);
}

app.get("/", (req, res) => res.send(config.get("APP_DETAILS")));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App listening on port ${port}!`));