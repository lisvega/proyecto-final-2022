const jwt = require("jsonwebtoken");

const createToken = (id, user) => {
  return jwt.sign({ id, user }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { createToken, verifyToken };
