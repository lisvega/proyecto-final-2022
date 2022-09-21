const PdiRoutes = require("express").Router();
const { authorize } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");

const {
  getAll,
  getById,
  create,
} = require("./pdi.controller.js");

PdiRoutes.get("/", getAll);
PdiRoutes.get("/:id", getById);
PdiRoutes.post("/create", [authorize], upload.single("image"), create);

module.exports = PdiRoutes;
