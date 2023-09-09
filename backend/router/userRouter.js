const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadUser } = require("../controller/userController");
const userRouter = express.Router();

const uploadPdf = multer({
  limits: 1000000000 * 2000000,
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../upload"));
    },
    //   fileFilter(file, cb) {
    //     if (!file.originalname.match(/\.(jpg|jpeg|png|gif|eps|raw|cr2|nef|orf|sr2|bmp|tif|tiff)$/)) {
    //         return cb(new Error('Please upload a valid image file'))
    //     }
    //     cb(undefined, true)
    // },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
});

userRouter.post("/upload", uploadPdf.single("file"), uploadUser);

module.exports = userRouter;
