const ExperienceRoutes = require("express").Router();
const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");

const {
  getAll,
  getById,
  getByLocation,
  create
} = require("./experience.controller");

ExperienceRoutes.get("/", getAll);
ExperienceRoutes.get("/:id", getById);
ExperienceRoutes.get("/:location", getByLocation);
ExperienceRoutes.post("/create", [isAdmin], upload.single("image"), create);

module.exports = ExperienceRoutes;
