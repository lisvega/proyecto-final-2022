const UserRoutes = require("express").Router();
const { authorize } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");


const {
  getAll,
  getById,
  getByUserName,
  register,
  login,

} = require("./user.controller");

UserRoutes.post("/signup", upload.single("avatar"), register);
UserRoutes.post("/login", login);
UserRoutes.get("/", getAll);
UserRoutes.get("/:id", getById);
UserRoutes.get("/user/:username", [authorize], getByUserName);

module.exports = UserRoutes;
