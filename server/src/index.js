const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connect } = require("./helpers/db");
const { setUpCloudinary } = require("./helpers/cloudinary");
const UserRoutes = require("./api/user/user.routes");
const ExperienceRoutes = require("./api/experience/experience.routes");
const PdiRoutes = require("./api/pdi/pdi.routes");
const { setError } = require("./helpers/errors");

dotenv.config();
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;
const app = express();
connect();
setUpCloudinary();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));

app.use(express.urlencoded({ limit: "1mb", extended: true }));

app.set("secretKey", JWT_SECRET);

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/experience", ExperienceRoutes);
app.use("/api/v1/pdi", PdiRoutes);

app.use("*", (req, res, next) => {
  const error = new Error();
  error.status = 404;
  error.message = "Route not found";
  return next(error);
});

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(setError(error));
});

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(`Server running on port -> http://localhost:${PORT}`);
});
