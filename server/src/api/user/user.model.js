const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const schema = new Schema(
  {
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: { type: String, required: true },
    description: { type: String, required: false },
    isAdmin: { type: Boolean, default: false },
    ownerExperience: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: "experience" }],
    favoriteExperience: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: "experience" }],
  },
  {
    timestamps: true,
  }
);

schema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("user", schema);
