const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const db = require("./models");
const userRouter = require("./routes/user");
const verifyToken = require("./middlewares/auth");

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  db.sequelize.sync().then((req) => {
    console.log("Connected to DB");
  });
});

app.use("/user", userRouter);
app.use("/user/all", verifyToken, userRouter);
app.use("/", (req, res) => {
  return res.send("Hello");
});
