const Pdi = require("./pdi.model.js");
const { setError } = require("../../helpers/errors");

const getAll = async (req, res, next) => {
  try {
    const pdi = await Pdi.find();
    return res.json({
      status: 200,
      message: "Recovered all Pdis",
      data: pdi,
    });
  } catch (error) {
    return next(setError(500, "Failed all Pdis"));
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pdi = await Pdi.findById(id);
    if (!pdi) return next(setError(404, "Pdi not found"));
    return res.json({
      status: 200,
      message: "Recovered pdi by id",
      data: pdi,
    });
  } catch (error) {
    return next(setError(500, "Failed pdi by id"));
  }
};

const create = async (req, res, next) => {
  try {
    const newPdi = new Pdi(req.body);
    const pdiExist = await Pdi.findOne({ name: newPdi.name });
    if (pdiExist) { return next(setError(409, "This pdi already exist")) };
    console.log(req);
    if (req.file) { newPdi.image = req.file.path };
    console.log(newPdi.image);
    const pdiInDb = await newPdi.save();
    res.status(201).json(pdiInDb);
  } catch (error) {
    return next(setError(500, error.message || "Failed create pdi"));
  }
};

module.exports = {
  getAll,
  getById,
  create,
};
