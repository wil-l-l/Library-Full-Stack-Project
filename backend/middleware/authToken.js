const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.header("x-user-auth-token");
  if (!token)
    return res
      .status(401)
      .send({ success: false, message: "Access denied. No token provided." });

  try {
    const decodedPayload = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decodedPayload;
    next();
  } catch (error) {
    return res.status(400).send({ success: false, message: "Invalid token." });
  }
};
