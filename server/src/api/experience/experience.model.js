const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    pdis: [{ type: mongoose.Schema.Types.ObjectId, ref: "pdi" }],
    userFavorite: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: "user" }],
    lat: { type: String },
    lng: { type: String }

  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("experience", schema);
