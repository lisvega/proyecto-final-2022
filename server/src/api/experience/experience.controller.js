const Experience = require('./experience.model');
const { setError } = require('../../helpers/errors');

const getAll = async (req, res, next) => {
  try {
    const experience = await Experience.find().populate("pdis");
    return res.json({
      status: 200,
      message: 'Recovered all Experiences',
      data: experience
    });
  } catch (error) {
    return next(setError(500, 'Failed all Experiences'));
  }
}

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id).populate("pdis");
    if (!experience) return next(setError(404, 'Experience not found'))
    return res.json({
      status: 200,
      message: 'Recovered experience by id',
      data: experience
    });
  } catch (error) {
    return next(setError(500, 'Failed experience by id'))
  }
}

const getByLocation = async (req, res, next) => {
  try {
    const { location } = req.params;
    const experience = await Experience.find({ location: location }).populate("pdis");;
    if (!experience) return next(setError(404, "Experience not found"));
    return res.json({
      status: 200,
      message: "Recovered Experience by location",
      data: experience,
    });
  } catch (error) {
    return next(setError(500, "Failed Experience by location"));
  }
};

const create = async (req, res, next) => {
  try {

    let pdisArray = await req.body.pdis.split(",")


    const experienceData = {
      name: req.body.name,
      price: req.body.price,
      location: req.body.location,
      image: req.body.imagen,
      description: req.body.description,
      pdis: pdisArray,
      userFavorites: req.body.userFavorites,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    }


    const newExperience = new Experience(experienceData);
    const experience = await Experience.findOne({ name: newExperience.name });
    if (experience) { return next(setError(409, "This Experience already exist")) };
    if (req.file) { newExperience.image = req.file.path };
    const experienceInDb = await newExperience.save();
    res.status(201).json(experienceInDb);
  } catch (error) {
    return next(setError(500, "Failed create Experience"));
  }
}


module.exports = {
  getAll,
  getById,
  getByLocation,
  create,
}

