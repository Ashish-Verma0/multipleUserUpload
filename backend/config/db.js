const mongoose = require("mongoose");

mongoose.connection.on("open", () => {
  console.log("database connected ");
});
mongoose.connection.on("end", () => {
  console.log("database not connected ");
});

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/uploadUser", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
