const express = require("express");
const userRouter = require("./router/userRouter");
const path = require("path");
const connectDatabase = require("./config/db");
const app = express();
app.use("/", express.static(path.join(__dirname, "./upload")));
app.use(express.json());

app.use("/user", userRouter);

app.use("/", (req, res) => {
  res.send("hello");
});

const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
