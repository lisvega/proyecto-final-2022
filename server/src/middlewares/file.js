const multer = require("multer");

const cloudinary = require("cloudinary").v2;

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "default",
    allowedFormats: ["jpg", "png", "jpeg", "gif"],
  },
}, console.log("Cloudinary storage created", cloudinary));

const upload = multer({ storage });

module.exports = upload;
