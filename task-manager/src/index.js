const express = require("express");
require("./db/mongoose");


const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server ON on port: ", port);
});

const jwt = require("jsonwebtoken");

const func = async () => {
  const token = jwt.sign({ _id: "abcd123" }, "creatingacooltaskmanagerapp", {
    expiresIn: "7 days",
  });
  // console.log(token);

  const data = jwt.verify(token, "creatingacooltaskmanagerapp");

  console.log("====>", data);
};

func();
