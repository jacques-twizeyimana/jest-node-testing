const config = require("config");
const jwt = require("jsonwebtoken");
const { createError } = require("../utils/custom-reponse");

function authenticated(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token)
    return res
      .status(200)
      .send(
        createError(
          401,
          "This service is for authorised users only.plz got to login to access it"
        )
      );

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded.user;
    next();
  } catch (err) {
    return res
      .status(200)
      .send(
        createError(400, "Your session data was destroyed. go to login again")
      );
  }
}

module.exports = { isAdmin, authenticated };
