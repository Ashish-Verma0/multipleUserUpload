const userDatabase = require("../model/userModel");
const csv = require("csvtojson");
const uploadUser = (req, res) => {
  try {
    let data = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (let i = 0; i < response.length; i++) {
          data.push({
            name: response[i].name,
            email: response[i].email,
            mobile: response[i].mobile,
          });
        }
        await userDatabase.insertMany(data);
      });

    res.status(200).json({
      success: true,
      message: "user cretaed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadUser,
};
